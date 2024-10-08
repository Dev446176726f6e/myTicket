import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto copy";
import { create } from "domain";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";

// customer_card can be add by themselves without admin.
// all can see all customers his cards.
// and admins all cards.
// customer_card info  should be open to see his own info.
// and both be able to update it.
// only admins can delete it.

@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @Post("create")
  async createVenueType(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @Get("")
  async getVenueTypes() {
    return this.venueTypeService.getAllVenueTypes();
  }

  @Get(":id")
  async getVenueTypesById(@Param("id") id: number) {
    return this.venueTypeService.getVenueTypeById(id);
  }

  @Get("type/:name")
  async getVenueTypeByName(@Param("name") name: string) {
    return this.venueTypeService.getVenueTypeByName(name);
  }

  @Patch(":id")
  async updateVenueType(
    @Param("id") id: number,
    @Body() updateVenueType: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.updateVenueType(id, updateVenueType);
  }

  @Delete(":id")
  async deleteVenueType(@Param("id") id: number) {
    return this.venueTypeService.deleteVenueType(id);
  }
}
