import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateVenueVenueTypeDto {
  @IsNumber()
  @IsNotEmpty()
  venueId: number;

  @IsNumber()
  @IsNotEmpty()
  venueTypeId: number;
}
