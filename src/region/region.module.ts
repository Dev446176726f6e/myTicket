import { Module } from "@nestjs/common";
import { RegionService } from "./region.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Region } from "./model/region.model";
import { RegionController } from "./region.controller";

@Module({
  imports: [SequelizeModule.forFeature([Region])],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
