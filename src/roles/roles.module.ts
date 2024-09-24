import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./model/role.model";
import { UserRoles } from "src/users/model/user-role.model";

@Module({
  imports: [SequelizeModule.forFeature([Role, UserRoles, Role])],
  controllers: [RolesController],
  providers: [RolesService],
  // exports: [RolesService],
})
export class RolesModule {}
