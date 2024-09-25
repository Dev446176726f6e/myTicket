import { IsNumber, IsString, Length } from "class-validator";

export class CreateAgeGroupDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNumber()
  start_age: number;

  @IsNumber()
  finish_age: number;

  @IsNumber()
  gender: number;
}
