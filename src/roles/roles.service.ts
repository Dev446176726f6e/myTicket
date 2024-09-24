import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./model/role.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesModel: typeof Role) {}

  create(createRoleDto: CreateRoleDto) {
    return this.rolesModel.create({
      value: createRoleDto.value.toUpperCase(),
      description: createRoleDto.description,
    });
  }

  findAll() {
    return this.rolesModel.findAll({ include: { all: true } });
  }

  findRoleByValue(value: string) {
    return this.rolesModel.findOne({ where: { value: value.toUpperCase() } });
  }

  findOne(id: number) {
    return this.rolesModel.findByPk(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
