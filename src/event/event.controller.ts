import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";

// managed by admins.(add, delete, update)
// all seen by admins.
// by venue customers can see.

@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get("all")
  findAll() {
    return this.eventService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }

  @Get("sold-seats/:eventId")
  soldSeats(@Param("eventId") eventId: number) {
    return this.eventService.getSoldSeats(eventId);
  }
}
