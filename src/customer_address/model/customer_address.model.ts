import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";
import { District } from "src/district/model/district.model";
import { Region } from "src/region/model/region.model";

interface ICustomerAddressCreationAttr {
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat?: number;
  location: string;
  post_index: string;
  info?: string;
}

@Table({ tableName: "customer_address", timestamps: false })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  customerId: number;

  name: string;

  //   @ForeignKey(() => Country)
  //   @Column({ type: DataType.INTEGER })
  //   countryId: number;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  regionId: number;

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  districtId: number;

  @Column({ type: DataType.STRING })
  street: string;

  @Column({ type: DataType.STRING })
  house: string;

  @Column({ type: DataType.INTEGER })
  flat: number;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  post_index: string;

  @Column({ type: DataType.TEXT })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;

  // @BelongsTo(() => Country)
  // country: Country

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;
}
