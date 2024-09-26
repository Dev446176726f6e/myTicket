import { IsNumber } from "class-validator";

export class ActivateDeactivateUserDto {
  @IsNumber()
  readonly userId: number;
}
