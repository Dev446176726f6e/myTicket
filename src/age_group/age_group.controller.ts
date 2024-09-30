import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { AgeGroupService } from "./age_group.service";
import { CreateAgeGroupDto } from "./dto/create-age_group.dto copy";
import { UpdateAgeGroupDto } from "./dto/update-age_group.dto";
import { JwtAuthGuard } from "../guard/jwt-auth.guard";
import { AdminGuard } from "../guard/superadmin.admin.guard";
import { SelfGuard } from "../guard/self.guard";

@UseGuards(JwtAuthGuard)
@Controller("age-group")
export class AgeGroupController {
  constructor(private readonly ageGroupService: AgeGroupService) {}

  @UseGuards(AdminGuard)
  @Post()
  async createAgeGroup(@Body() createAgeGroupDto: CreateAgeGroupDto) {
    return this.ageGroupService.createAgeGroup(createAgeGroupDto);
  }

  @UseGuards(AdminGuard)
  @Get("all")
  async getAllAgeGroup() {
    return this.ageGroupService.getAllAgeGroup();
  }

  // @UseGuards(SelfGuard, AdminGuard)
  @UseGuards(AdminGuard)
  @Get(":id")
  async getAgeGroupById(@Param("id") id: number) {
    return this.ageGroupService.getAgeGroupById(id);
  }

  @UseGuards(AdminGuard)
  @Get("cat/:name")
  async getAgeGroupByName(@Param("name") name: string) {
    return this.ageGroupService.getAgeGroupByName(name);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  async deleteAgeGroup(@Param("id") id: number) {
    return this.ageGroupService.deleteAgeGroup(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  async updateAgeGroup(
    @Param("id") id: number,
    @Body() updateAgeGroup: UpdateAgeGroupDto
  ) {
    return this.ageGroupService.updateAgeGroup(id, updateAgeGroup);
  }
}
