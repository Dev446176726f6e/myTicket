import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CustomerAddress } from "./model/customer_address.model";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private customerAddressModel: typeof CustomerAddress
  ) {}

  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    const new_customer_address = await this.customerAddressModel.create(
      createCustomerAddressDto
    );
    return new_customer_address;
  }

  findAll() {
    return this.customerAddressModel.findAll();
  }

  findOne(id: number) {
    return this.customerAddressModel.findByPk(id);
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const updated_customer_address = await this.customerAddressModel.update(
      updateCustomerAddressDto,
      { where: { id }, returning: true }
    );
    return updated_customer_address[1][0];
  }

  remove(id: number) {
    return this.customerAddressModel.destroy({ where: { id } });
  }
}
