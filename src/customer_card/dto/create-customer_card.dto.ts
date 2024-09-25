import {
  IsBoolean,
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Matches,
} from "class-validator";

export class CreateCustomerCardDto {
  @IsNumber()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber("UZ")
  phone: string;

  @IsCreditCard()
  number: string;

  @IsString()
  @Matches(/^\d{4}$/, { message: "Year must be a 4-digit number." })
  year: string;

  @IsString()
  @Matches(/^(0[1-9]|1[0-2])$/, {
    message: "Month must be a 2-digit number between 01 and 12.",
  })
  month: string;

  @IsBoolean()
  is_active: boolean;

  @IsBoolean()
  is_main: boolean;
}
