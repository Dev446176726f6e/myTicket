import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty()
  eventId: number;

  @IsNumber()
  @IsNotEmpty()
  seatId: number;

  @IsNumber()
  price: number;

  @IsNumber()
  service_fee: number;

  @IsNumber()
  statusId: number;
}
