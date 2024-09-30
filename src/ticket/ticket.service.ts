import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./model/ticket.model";
import { TicketStatus } from "../ticket_status/model/ticket_status.model";


@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketModel: typeof Ticket) {}

  async create(createTicketDto: CreateTicketDto) {
    const new_ticket = await this.ticketModel.create(createTicketDto);
    return new_ticket;
  }

  findAll() {
    return this.ticketModel.findAll({
      include: [{ model: TicketStatus, attributes: ["name"] }],
    });
  }

  findOne(id: number) {
    return this.ticketModel.findByPk(id, {
      include: [{ model: TicketStatus, attributes: ["name"] }],
    });
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
