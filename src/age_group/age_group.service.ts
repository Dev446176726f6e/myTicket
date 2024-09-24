import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { AgeGroup } from "./models/age_group.model";
import { CreateAgeGroupDto } from "./dto/create-age_group.dto copy";
import { UpdateAgeGroupDto } from "./dto/update-age_group.dto";

@Injectable()
export class AgeGroupService {
  constructor(@InjectModel(AgeGroup) private ageGroupModel: typeof AgeGroup) {}
  async createAgeGroup(
    createAgeGroupDto: CreateAgeGroupDto
  ): Promise<AgeGroup> {
    const new_age_group = await this.ageGroupModel.create(createAgeGroupDto);
    return new_age_group;
  }

  async getAllAgeGroup(): Promise<AgeGroup[]> {
    return this.ageGroupModel.findAll();
  }

  async getAgeGroupById(id: number): Promise<AgeGroup> {
    return this.ageGroupModel.findByPk(id);
  }

  async getAgeGroupByName(name: string): Promise<AgeGroup> {
    return this.ageGroupModel.findOne({ where: { name } });
  }

  async deleteAgeGroup(id: number): Promise<number> {
    return this.ageGroupModel.destroy({ where: { id } });
  }

  async updateAgeGroup(
    id: number,
    updateAgeGroupDto: UpdateAgeGroupDto
  ): Promise<AgeGroup> {
    const updated_age_group = await this.ageGroupModel.update(
      updateAgeGroupDto,
      { where: { id }, returning: true }
    );
    return updated_age_group[1][0];
  }
}
