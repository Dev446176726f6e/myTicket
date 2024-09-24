import { Injectable } from "@nestjs/common";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TicketStatus } from "./model/ticket_status.model";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus) private ticketStatusModel: typeof TicketStatus
  ) {}

  async create(createTicketStatusDto: CreateTicketStatusDto) {
    const new_ticketStatus = await this.ticketStatusModel.create(
      createTicketStatusDto
    );
    return new_ticketStatus;
  }

  findAll() {
    return this.ticketStatusModel.findAll();
  }

  findOne(id: number) {
    return this.ticketStatusModel.findByPk(id);
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const updated_ticketStatus = await this.ticketStatusModel.update(
      updateTicketStatusDto,
      { where: { id }, returning: true }
    );
    return updated_ticketStatus;
  }

  remove(id: number) {
    return this.ticketStatusModel.destroy({ where: { id } });
  }
}
