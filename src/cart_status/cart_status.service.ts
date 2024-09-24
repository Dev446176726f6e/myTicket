import { Injectable } from '@nestjs/common';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';

@Injectable()
export class CartStatusService {
  create(createCartStatusDto: CreateCartStatusDto) {
    return 'This action adds a new cartStatus';
  }

  findAll() {
    return `This action returns all cartStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartStatus`;
  }

  update(id: number, updateCartStatusDto: UpdateCartStatusDto) {
    return `This action updates a #${id} cartStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartStatus`;
  }
}
