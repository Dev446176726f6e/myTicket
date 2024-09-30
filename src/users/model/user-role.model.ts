import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "../../roles/model/roles.model";

interface IUserRoleCreationAttr {
  s;
  userId: number;
  roleId: number;
}

@Table({ tableName: "user_role" })
export class UserRoles extends Model<UserRoles, IUserRoleCreationAttr> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}
