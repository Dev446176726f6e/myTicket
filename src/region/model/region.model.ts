import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";
import { CustomerAddress } from "src/customer_address/model/customer_address.model";
import { District } from "src/district/model/district.model";
import { Venue } from "src/venue/model/venue.model";

interface RegionAttr {
  name: string;
}

@Table({ tableName: "region", timestamps: false })
export class Region extends Model<Region, RegionAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Venue)
  venues: Venue[];

  @HasMany(() => District)
  districts: District[];

  @HasMany(() => CustomerAddress)
  customers: CustomerAddress[];
}
