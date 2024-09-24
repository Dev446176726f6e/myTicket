import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AgeGroup } from "./models/age_group.model";
import { AgeGroupService } from "./age_group.service";
import { AgeGroupController } from "./age_group.controller";

@Module({
  imports: [SequelizeModule.forFeature([AgeGroup])],
  controllers: [AgeGroupController],
  providers: [AgeGroupService],
})
export class AgeGroupModule {}
