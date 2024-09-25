import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./model/customer.model";
import { CustomerCard } from "src/customer_card/model/customer_card.model";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModel: typeof Customer) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const new_customer = await this.customerModel.create(createCustomerDto);
    return new_customer;
  }

  findAll() {
    return this.customerModel.findAll({
      include: [
        {
          model: CustomerCard,
          attributes: ["number", "year", "month", "name"],
        },
      ],
    });
  }

  findOne(id: number) {
    return this.customerModel.findByPk(id, {
      include: [
        {
          model: CustomerCard,
          attributes: ["number", "year", "month", "name"],
        },
      ],
    });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const updated_customer = await this.customerModel.update(
      updateCustomerDto,
      { where: { id }, returning: true }
    );
    return updated_customer[1][0];
  }

  remove(id: number) {
    return this.customerModel.destroy({ where: { id } });
  }
}
