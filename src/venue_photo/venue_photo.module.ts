import { Module } from '@nestjs/common';
import { VenuePhotoController } from './venue_photo.controller';
import { VenuePhotoService } from './venue_photo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './model/venue_photo.model';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhoto])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService]
})
export class VenuePhotoModule {}
