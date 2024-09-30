import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";

// only admins can add venue.
// not only admins buy everyone can see all venues.
// you can see by id or name.
// only admins can update info.
// only admins can delete it.

@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post("create")
  async createVenue(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.createVenue(createVenueDto);
  }

  @Get("")
  async getVenues() {
    return this.venueService.getAllVenues();
  }

  @Get(":id")
  async getVenueById(@Param("id") id: number) {
    return this.venueService.getVenueById(id);
  }

  @Patch(":id")
  async updateVenue(
    @Param("id") id: number,
    @Body() updateVenue: UpdateVenueDto
  ) {
    return this.venueService.updateVenue(id, updateVenue);
  }

  @Delete(":id")
  async deleteVenue(@Param("id") id: number) {
    return this.venueService.deleteVenue(id);
  }
}
