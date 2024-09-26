import { IsNotEmpty, IsNumber } from "class-validator";

export class AddRemoveRoleDto {
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  readonly role_value: string;
}
