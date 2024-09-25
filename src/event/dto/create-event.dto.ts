import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinDate,
} from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  photo: string;

  @IsDateString()
  @MinDate(new Date())
  start_date: string;

  @IsString()
  start_time: string;

  @IsDateString()
  finish_date: string;

  @IsString()
  finish_time: string;

  @IsString()
  info: string;

  @IsNumber()
  event_type_Id: number;

  @IsNumber()
  human_category_Id: number;

  @IsNumber()
  venueId: number;

  @IsNumber()
  langId: number;

  @IsDateString()
  release_date: string;
}
