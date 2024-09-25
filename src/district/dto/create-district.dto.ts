import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsArray } from "sequelize-typescript";

export class CreateDistrictDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  regionId: number;
}
