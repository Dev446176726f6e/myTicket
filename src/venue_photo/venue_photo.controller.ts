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
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";

// only admins can add photo.
// not all photos.
// by id can be seen by event.
// admins can update photo
// only admins can delete it.

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
