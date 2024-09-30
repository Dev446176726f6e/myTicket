import { IsNotEmpty, IsString } from "class-validator";

export class AdminSignInDto {
  @IsNotEmpty()
  readonly login: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
