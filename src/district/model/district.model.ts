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
import { Region } from "src/region/model/region.model";
import { Venue } from "src/venue/model/venue.model";

interface IDistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district", timestamps: false })
export class District extends Model<District, IDistrictCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Venue)
  venue: Venue[];

  @HasMany(() => CustomerAddress)
  customers: CustomerAddress[];
}
