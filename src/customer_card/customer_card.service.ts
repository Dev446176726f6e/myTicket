import { Injectable } from "@nestjs/common";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CustomerCard } from "./model/customer_card.model";
import { Customer } from "src/customer/model/customer.model";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard) private customerCardModel: typeof CustomerCard
  ) {}

  async create(createCustomerCardDto: CreateCustomerCardDto) {
    const new_customer_card = await this.customerCardModel.create(
      createCustomerCardDto
    );
    return new_customer_card;
  }

  findAll() {
    return this.customerCardModel.findAll({
      include: [
        { model: Customer, attributes: ["first_name", "last_name", "phone"] },
      ],
    });
  }

  findOne(id: number) {
    return this.customerCardModel.findByPk(id, {
      include: [
        { model: Customer, attributes: ["first_name", "last_name", "phone"] },
      ],
    });
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    const updated_customer_card = await this.customerCardModel.update(
      updateCustomerCardDto,
      { where: { id }, returning: true }
    );
    return updated_customer_card[1][0];
  }

  remove(id: number) {
    return this.customerCardModel.destroy({ where: { id } });
  }
}
