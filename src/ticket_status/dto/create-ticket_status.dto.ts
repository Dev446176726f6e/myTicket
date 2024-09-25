import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketStatusDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
