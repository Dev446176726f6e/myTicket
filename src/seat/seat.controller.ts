import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";

// seat can be add, update, delete. can't see all seats.
// buy by venue and with event customer can see.

@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @Get("all")
  findAll() {
    return this.seatService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatService.remove(+id);
  }
}
