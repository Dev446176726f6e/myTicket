import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User,
  private readonly rolesService: typeof RolesService
) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    // const role = await this.rolesService.findRoleByRole(createUserDto.role_value)
    // if (!role) {
    //   throw new BadRequestException("Role not found.")
    // }
    
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
