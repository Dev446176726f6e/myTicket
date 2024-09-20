import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto copy";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";

@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @Post("create")
  async createHumanCategory(
    @Body() createHumanCategoryDto: CreateHumanCategoryDto
  ) {
    return this.humanCategoryService.createHumanCategory(
      createHumanCategoryDto
    );
  }

  @Get("cat/all")
  async getAllHumanCategory() {
    return this.humanCategoryService.getAllHumanCategory();
  }

  @Get(":id")
  async getHumanCategoryById(@Param("id") id: number) {
    return this.humanCategoryService.getHumanCategoryById(id);
  }

  @Get("cat/:name")
  async getHumanCategoryByName(@Param("name") name: string) {
    return this.humanCategoryService.getHumanCategoryByName(name);
  }

  @Delete("del/:id")
  async deleteHumanCategory(@Param("id") id: number) {
    return this.humanCategoryService.deleteHumanCategory(id)
  }

  @Patch("upd/:id")
  async updateHumanCategory(@Param("id") id: number, @Body() updateHumanCategory: UpdateHumanCategoryDto){
    return this.humanCategoryService.updateHumanCategory(id, updateHumanCategory)
  }
}
