import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./model/region.model";
import { CreateRegionDto } from "./dto/create-venue.dto";
import { UpdateRegionDto } from "./dto/update-venue.dto";

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionModel: typeof Region) {}

  async createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
    const region = await this.regionModel.create(createRegionDto);
    return region;
  }

  async getAllRegions(): Promise<Region[]> {
    return this.regionModel.findAll({ include: { all: true } });
  }

  async getRegionById(id: number): Promise<Region> {
    return this.regionModel.findByPk(id, { include: { all: true } });
  }

  async deleteRegion(id: number): Promise<number> {
    return this.regionModel.destroy({ where: { id } });
  }

  async updateRegion(
    id: number,
    updateRegionDto: UpdateRegionDto
  ): Promise<Region> {
    const region = await this.regionModel.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    return region[1][0];
  }
}
