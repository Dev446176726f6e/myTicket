import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";

// customer_card can be add by themselves without admin.
// all can see all customers his cards.
// and admins all cards.
// customer_card info  should be open to see his own info.
// and both be able to update it.
// only admins can delete it.

@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
