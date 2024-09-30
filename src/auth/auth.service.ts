import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { SignInDto } from "./dto/signin.dto";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { User } from "../users/model/user.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly userSerive: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const possible_user = await this.userSerive.findByEmail(
      createUserDto.email
    );

    if (possible_user) {
      throw new BadRequestException("User with this email exists");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const new_user = await this.userSerive.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.generateToken(new_user);
  }

  async generateToken(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
    };

    return this.jwtService.sign(payload);
  }

  async signIn(signinDto: SignInDto) {
    const user = await this.userSerive.findByEmail(signinDto.email);

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const validPassword = await bcrypt.compare(
      signinDto.password,
      user.password
    );

    if (!validPassword) {
      // the message must be changed. it's just for me to find the error
      throw new UnauthorizedException("Wrong password");
    }
    return this.generateToken(user);
  }
}
