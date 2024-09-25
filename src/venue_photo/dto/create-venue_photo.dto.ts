import { IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class CreateVenuePhotoDto {
  @IsNumber()
  @IsNotEmpty()
  venueId: number;

  @IsUrl()
  url: string;
}
