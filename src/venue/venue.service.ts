import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./model/venue.model";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Region } from "src/region/model/region.model";
import { District } from "src/district/model/district.model";
import { Seat } from "src/seat/model/seat.model";
import { VenueType } from "src/venue_type/model/venue_type.model";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueModel: typeof Venue) {}

  async createVenue(createVenueDto: CreateVenueDto): Promise<Venue> {
    const venue = await this.venueModel.create(createVenueDto);
    return venue;
  }

  async getAllVenues(): Promise<Venue[]> {
    return this.venueModel.findAll({
      include: [
        { model: Region, attributes: ["name"] },
        { model: District, attributes: ["name"] },
        { model: Seat, attributes: ["sector", "row_number", "number"] },
        { model: VenueType, attributes: ["name"] },
      ],
    });
  }

  async getVenueById(id: number): Promise<Venue> {
    return this.venueModel.findByPk(id, {
      include: [
        { model: Region, attributes: ["name"] },
        { model: District, attributes: ["name"] },
        { model: Seat, attributes: ["sector", "row_number", "number"] },
        { model: VenueType, attributes: ["name"] },
      ],
    });
  }

  async deleteVenue(id: number): Promise<number> {
    return this.venueModel.destroy({ where: { id } });
  }

  async updateVenue(
    id: number,
    updateVenueDto: UpdateVenueDto
  ): Promise<Venue> {
    const venue = await this.venueModel.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0];
  }
}
