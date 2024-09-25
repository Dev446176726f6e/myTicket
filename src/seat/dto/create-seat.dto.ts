import { ArrayMinSize, IsArray, IsNumber } from "class-validator";

export class CreateSeatDto {
  @IsNumber()
  sector: number;

  @IsNumber()
  row_number: number;

  @IsNumber()
  number: number;

  @IsNumber()
  venuId: number;

  @IsNumber()
  seat_type_Id: number;

  @IsArray()
  @ArrayMinSize(2)
  location_in_schema: string[];
}
