import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { District } from "src/district/model/district.model";
import { Event } from "src/event/model/event.model";
import { Region } from "src/region/model/region.model";
import { Seat } from "src/seat/model/seat.model";
import { VenuePhoto } from "src/venue_photo/model/venue_photo.model";
import { VenueType } from "src/venue_type/model/venue_type.model";
import { VenueVenueType } from "src/venue_venue_type/models/venue_venue_type.model";

interface VenueAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_Id: number;
  scheme: string[];
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue", timestamps: false })
export class Venue extends Model<Venue, VenueAttr> {
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

  @Column({
    type: DataType.STRING(100),
  })
  address: string;

  @Column({
    type: DataType.STRING(100),
  })
  location: string;

  @Column({
    type: DataType.STRING(100),
  })
  site: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
  phone: string;

  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
  })
  venue_type_Id: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  scheme: string[];

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => VenuePhoto)
  venue_photos: VenuePhoto[];

  // @BelongsToMany(() => VenueType, () => VenueVenueType)
  // venue_types: VenueType[];

  @HasMany(() => Seat)
  seats: Seat[];

  @HasMany(() => Event)
  events: Event[];
}
