import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './model/venue_photo.model';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoModel: typeof VenuePhoto
  ) {}

  async createVenuePhoto(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
    const venue = await this.venuePhotoModel.create(createVenuePhotoDto);
    return venue;
  }

  async getAllVenuePhotos(): Promise<VenuePhoto[]> {
    return this.venuePhotoModel.findAll();
  }

  async getVenuePhotoById(id: number): Promise<VenuePhoto> {
    return this.venuePhotoModel.findByPk(id);
  }

  async deleteVenuePhoto(id: number): Promise<number> {
    return this.venuePhotoModel.destroy({ where: { id } });
  }

  async updateVenuePhoto(
    id: number,
    updateVenuePhotoDto: UpdateVenuePhotoDto
  ): Promise<VenuePhoto> {
    const venue = await this.venuePhotoModel.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0];
  }
}
