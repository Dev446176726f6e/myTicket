import { IsNotEmpty, IsString } from "class-validator";
import { NotEmpty } from "sequelize-typescript";

export class CreateSeatTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
