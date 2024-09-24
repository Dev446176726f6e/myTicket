import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./model/user.model";
import { RolesModule } from "src/roles/roles.module";

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
