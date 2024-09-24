import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-venue.dto";
import { UpdateRegionDto } from "./dto/update-venue.dto";

@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post("create")
  async createRegion(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.createRegion(createRegionDto);
  }

  @Get("")
  async getRegions() {
    return this.regionService.getAllRegions();
  }

  @Get(":id")
  async getRegionById(@Param("id") id: number) {
    return this.regionService.getRegionById(id);
  }

  @Patch(":id")
  async updateRegion(
    @Param("id") id: number,
    @Body() updateRegion: UpdateRegionDto
  ) {
    return this.regionService.updateRegion(id, updateRegion);
  }

  @Delete(":id")
  async deleteRegion(@Param("id") id: number) {
    return this.regionService.deleteRegion(id);
  }
}
