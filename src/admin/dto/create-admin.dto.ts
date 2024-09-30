import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  login: string;

  @IsStrongPassword()
  hashed_password: string;

  @IsBoolean()
  is_active: boolean;

  @IsBoolean()
  is_creator: boolean;

  hashed_refresh_token: string;
}
