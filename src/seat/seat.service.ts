import { Injectable } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat } from "./model/seat.model";
import { Venue } from "../venue/model/venue.model";

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatModel: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto) {
    const new_seat = await this.seatModel.create(createSeatDto);
    return new_seat;
  }

  findAll() {
    return this.seatModel.findAll({
      include: [{ model: Venue, attributes: ["name", "address"] }],
    });
  }

  findOne(id: number) {
    return this.seatModel.findByPk(id, {
      include: [{ model: Venue, attributes: ["name", "address"] }],
    });
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const updated_seat = await this.seatModel.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    return updated_seat[1][0];
  }

  remove(id: number) {
    return this.seatModel.destroy({ where: { id } });
  }
}
