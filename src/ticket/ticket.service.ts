import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./model/ticket.model";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketModel: typeof Ticket) {}

  async create(createTicketDto: CreateTicketDto) {
    const new_ticket = await this.ticketModel.create(createTicketDto);
    return new_ticket;
  }

  findAll() {
    return this.ticketModel.findAll();
  }

  findOne(id: number) {
    return this.ticketModel.findByPk(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const updated_ticket = this.ticketModel.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return updated_ticket[1][0];
  }

  remove(id: number) {
    return this.ticketModel.destroy({ where: { id } });
  }
}
