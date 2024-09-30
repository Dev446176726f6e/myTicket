import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";

// only by admin add, update, delete, can be visible by ticket.

@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @Post("create")
  async createSeatType(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.createSeatType(createSeatTypeDto);
  }

  @Get("all")
  async getSeatTypes() {
    return this.seatTypeService.getAllSeatTypes();
  }

  @Get(":id")
  async getSeatTypesById(@Param("id") id: number) {
    return this.seatTypeService.getSeatTypeById(id);
  }

  @Get("type/:name")
  async getSeatTypeByName(@Param("name") name: string) {
    return this.seatTypeService.getSeatTypeByName(name);
  }

  @Patch(":id")
  async updateSeatType(
    @Param("id") id: number,
    @Body() updateSeatType: UpdateSeatTypeDto
  ) {
    return this.seatTypeService.updateSeatType(id, updateSeatType);
  }

  @Delete(":id")
  async deleteSeatType(@Param("id") id: number) {
    return this.seatTypeService.deleteSeatType(id);
  }
}
