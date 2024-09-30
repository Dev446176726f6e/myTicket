import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/model/customer.model";

interface ICustomerCardCreationAttr {
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: "customer_card", timestamps: false })
export class CustomerCard extends Model<
  CustomerCard,
  ICustomerCardCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customerId: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING, unique: true })
  number: string;

  @Column({ type: DataType.STRING })
  year: string;

  @Column({ type: DataType.STRING })
  month: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_main: boolean;

  @BelongsTo(() => Customer)
  customer: Customer;
}
