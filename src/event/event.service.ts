import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./model/event.model";
import { Venue } from "../venue/model/venue.model";
import { Seat } from "../seat/model/seat.model";
import { Ticket } from "../ticket/model/ticket.model";
import { TicketStatus } from "../ticket_status/model/ticket_status.model";
import { SeatType } from "../seat_type/model/seat_type.model";
import { EventType } from "../event_type/model/event_type.model";
import { Language } from "../language/model/language.model";

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventModel: typeof Event) {}

  async create(createEventDto: CreateEventDto) {
    const new_event = await this.eventModel.create(createEventDto);
    return new_event;
  }

  findAll() {
    return this.eventModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.eventModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const updated_event = this.eventModel.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    return updated_event[1][0];
  }

  remove(id: number) {
    return this.eventModel.destroy({ where: { id } });
  }

  async getSoldSeats(eventId: number) {
    const soldSeats = await this.eventModel.findByPk(eventId, {
      include: [
        {
          model: Venue,
          attributes: ["name", "address", "site", "phone"],
          include: [
            {
              model: Seat,
              attributes: ["sector", "row_number", "number"],
              include: [
                {
                  model: Ticket,
                  attributes: ["price"],
                  include: [
                    {
                      model: TicketStatus,
                      attributes: ["name"],
                      where: { name: "Sold" },
                    },
                  ],
                },
                { model: SeatType, attributes: ["name"] },
              ],
            },
          ],
        },
        { model: EventType, attributes: ["name", "category"] },
        { model: Language, attributes: ["name"] },
      ],
    });
    return soldSeats;
  }
}
