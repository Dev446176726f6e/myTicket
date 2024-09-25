import {
  IsDataURI,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsPhoneNumber("UZ")
  phone: string;

  @IsString()
  @IsStrongPassword()
  hashed_password: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsDateString()
  birthdate: Date;

  @IsEnum(["male", "female"])
  gender: "male" | "female";

  @IsNumber()
  lang_Id: number;

  // @IsString()
  hashed_refresh_token: string;
}
