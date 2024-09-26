import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { RolesModule } from "src/roles/roles.module";
import { UserRoles } from "./model/user-role.model";
import { Role } from "src/roles/model/roles.model";

@Module({
  imports: [SequelizeModule.forFeature([User, UserRoles, Role]), RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
