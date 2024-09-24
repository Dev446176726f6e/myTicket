import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenueDto } from "src/venue/dto/update-venue.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";

@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post("create")
  async createVenuePhoto(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.createVenuePhoto(createVenuePhotoDto);
  }

  @Get("")
  async getVenuesPhotos() {
    return this.venuePhotoService.getAllVenuePhotos();
  }

  @Get(":id")
  async getVenuePhotoById(@Param("id") id: number) {
    return this.venuePhotoService.getVenuePhotoById(id);
  }

  @Patch(":id")
  async updateVenuePhoto(
    @Param("id") id: number,
    @Body() updateVenuePhoto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.updateVenuePhoto(id, updateVenuePhoto);
  }

  @Delete(":id")
  async deleteVenuePhoto(@Param("id") id: number) {
    return this.venuePhotoService.deleteVenuePhoto(id);
  }
}
