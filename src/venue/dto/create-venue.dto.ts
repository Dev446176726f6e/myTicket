import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from "class-validator";
import { IsArray } from "sequelize-typescript";

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  address: string;

  @IsString()
  location: string;

  @IsUrl()
  site: string;

  @IsPhoneNumber("UZ")
  phone: string;

  @IsNumber()
  venue_type_Id: number;

  @ArrayNotEmpty()
  @IsString({ each: true })
  scheme: string[];

  @IsNumber()
  regionId: number;

  @IsNumber()
  districtId: number;
}
