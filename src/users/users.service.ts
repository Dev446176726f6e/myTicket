import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { AddRemoveRoleDto } from "./dto/add-remove-role.dto";
import { ActivateDeactivateUserDto } from "./dto/activate-user.dto";
import { RolesService } from "../roles/roles.service";
import { JwtAuthGuard } from "../guard/jwt-auth.guard";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly rolesService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const new_user = await this.userModel.create(createUserDto);
    const role = await this.rolesService.findRoleByValue(
      createUserDto.role_value
    );
    if (!role) {
      throw new BadRequestException("Role not found.");
    }
    await new_user.$set("roles", [role.id]);
    await new_user.save();
    new_user.roles = [role];
    return new_user;
  }

  findByEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
      include: {
        all: true,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: number) {
    const deleted_user = await this.userModel.destroy({ where: { id } });
    if (deleted_user == 0) {
      throw new NotFoundException("User is not deleted");
    }
    return { message: "User deleted successfully" };
  }

  async addRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );

    if (role && user) {
      await user.$add("roles", role.id);
      const updated_user = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updated_user;
    }
    throw new NotFoundException("User or role not found");
  }

  async removeRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );

    if (role && user) {
      await user.$remove("roles", role.id);
      const updated_user = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updated_user;
    }
    throw new NotFoundException("User or role not found");
  }

  async activate_deactivateUser(
    activatedeactivateUserDto: ActivateDeactivateUserDto
  ) {
    const user = await this.userModel.findByPk(
      activatedeactivateUserDto.userId
    );

    if (user) {
      if (user.is_active) {
        user.is_active = false;
        await user.save();
        return { message: "User de-activated" };
      }
      user.is_active = true;
      await user.save();
      return { message: "User activated" };
    }
    throw new NotFoundException("User not found");
  }
}
