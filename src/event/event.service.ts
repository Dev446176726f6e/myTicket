import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./model/event.model";

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
}
