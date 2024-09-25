import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPostalCode,
  IsString,
} from "class-validator";

export class CreateCustomerAddressDto {
  @IsNumber()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  countryId: number;

  @IsNumber()
  regionId: number;

  @IsNumber()
  districtId: number;

  @IsString()
  street: string;

  @IsString()
  house: string;

  @IsNumber()
  flat: number;

  @IsString()
  location: string;

  @IsString()
  post_index: string;

  @IsString()
  @IsOptional()
  info: string;
}
