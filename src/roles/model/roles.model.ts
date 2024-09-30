import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "../../users/model/user-role.model";
import { User } from "../../users/model/user.model";

interface IRoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
