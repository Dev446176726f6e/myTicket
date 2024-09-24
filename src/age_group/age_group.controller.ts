import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { AgeGroupService } from "./age_group.service";
import { CreateAgeGroupDto } from "./dto/create-age_group.dto copy";
import { UpdateAgeGroupDto } from "./dto/update-age_group.dto";

@Controller("age-group")
export class AgeGroupController {
  constructor(private readonly ageGroupService: AgeGroupService) {}

  @Post()
  async createAgeGroup(@Body() createAgeGroupDto: CreateAgeGroupDto) {
    return this.ageGroupService.createAgeGroup(createAgeGroupDto);
  }

  @Get("all")
  async getAllAgeGroup() {
    return this.ageGroupService.getAllAgeGroup();
  }

  @Get(":id")
  async getAgeGroupById(@Param("id") id: number) {
    return this.ageGroupService.getAgeGroupById(id);
  }

  @Get("cat/:name")
  async getAgeGroupByName(@Param("name") name: string) {
    return this.ageGroupService.getAgeGroupByName(name);
  }

  @Delete(":id")
  async deleteAgeGroup(@Param("id") id: number) {
    return this.ageGroupService.deleteAgeGroup(id);
  }

  @Patch(":id")
  async updateAgeGroup(
    @Param("id") id: number,
    @Body() updateAgeGroup: UpdateAgeGroupDto
  ) {
    return this.ageGroupService.updateAgeGroup(id, updateAgeGroup);
  }
}
