import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddRemoveRoleDto } from "./dto/add-remove-role.dto";
import { ActivateDeactivateUserDto } from "./dto/activate-user.dto";
import { JwtAuthGuard } from "../guard/jwt-auth.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @HttpCode(200)
  @Post("add_role")
  async addRole(@Body() addremoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.addRole(addremoveRoleDto);
  }

  @HttpCode(200)
  @Post("remove_role")
  async removeRole(@Body() addremoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.removeRole(addremoveRoleDto);
  }

  @HttpCode(200)
  @Post("activate")
  async activatedeactivateUser(
    @Body() activatedeactivateUserDto: ActivateDeactivateUserDto
  ) {
    return this.usersService.activate_deactivateUser(activatedeactivateUserDto);
  }
}
