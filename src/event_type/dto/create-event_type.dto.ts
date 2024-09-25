import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEventTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  parent_event_type_Id: number;
}
