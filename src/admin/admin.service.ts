import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { AdminSignInDto } from "./dto/admin.signin.dto";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private readonly jwtService: JwtService
  ) {}

  // only creator can add admin.
  async signUp(createAdminDto: CreateAdminDto) {
    const login_check = await this.adminModel.findOne({
      where: { login: createAdminDto.login },
    });

    if (login_check) {
      throw new BadRequestException("Admin with this login exists");
    }
    const hashed_password = await bcrypt.hash(
      createAdminDto.hashed_password,
      10
    );

    const new_admin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password: hashed_password,
    });
    // const tokens = await this.generateToken(new_admin);
    // new_admin.hashed_refresh_token = tokens.hashed_token;
    // new_admin.save();
    // return { token: tokens.refresh_token };
    // const token = await this.generateToken(new_admin);
    // return { token: token };
    return this.generateToken(new_admin);
  }

  async generateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      login: admin.login,
      is_craeator: admin.is_creator,
      is_active: admin.is_active,
      // it can be adjusted, with roles.
    };
    // const refresh_token = await this.jwtService.sign(payload);
    // const hashed_token = await bcrypt.hash(refresh_token, 10);
    // return { refresh_token, hashed_token };
    return this.jwtService.sign(payload);
  }

  async signIn(adminSignInDto: AdminSignInDto) {
    const admin = await this.adminModel.findOne({
      where: { login: adminSignInDto.login },
    });

    if (!admin) {
      throw new UnauthorizedException("Admin not found");
    }

    const validPassword = await bcrypt.compare(
      adminSignInDto.password,
      admin.hashed_password
    );

    if (!validPassword) {
      // the message must be changed. it's just for me to find the error
      throw new UnauthorizedException("Wrong password");
    }
    // const tokens = await this.generateToken(admin);
    // admin.hashed_refresh_token = tokens.hashed_token;
    // admin.save();
    // return { token: tokens.refresh_token };
    // const token = await this.generateToken(admin);
    // return { token: token };
    return this.generateToken(admin);
  }

  // only creator or in other words superadmin can see list of all admins.
  findAll() {
    return this.adminModel.findAll();
  }

  // okay, admin can see its own info and profile.
  // but there must be self guard)
  findOne(id: number) {
    return this.adminModel.findOne({ where: { id } });
  }

  // okay, admin can update.
  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const updated_admin = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return updated_admin[1][0];
  }

  // but, admin itself cannot delete himself.
  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }
}
