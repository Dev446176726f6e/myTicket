import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
import { District } from "../../district/model/district.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";

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
