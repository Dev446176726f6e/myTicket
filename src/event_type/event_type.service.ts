import { Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { EventType } from "./model/event_type.model";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeModel: typeof EventType
  ) {}

  async create(createEventTypeDto: CreateEventTypeDto) {
    const new_eventType = await this.eventTypeModel.create(createEventTypeDto);
    return new_eventType;
  }

  findAll() {
    return this.eventTypeModel.findAll({
      include: [
        {
          model: EventType,
          as: "childEventTypes",
          attributes: ["name", "description", "category"],
        },
      ],
    });
  }

  findOne(id: number) {
    return this.eventTypeModel.findByPk(id, {
      include: [
        {
          model: EventType,
          as: "childEventTypes",
          attributes: ["name", "description", "category"],
        },
      ],
    });
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const updated_eventType = await this.eventTypeModel.update(
      updateEventTypeDto,
      { where: { id }, returning: true }
    );
    return updated_eventType[1][0];
  }

  remove(id: number) {
    return this.eventTypeModel.destroy({ where: { id } });
  }
}
