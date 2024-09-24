import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/model/venue.model";

interface VenuePhotoAttr {
  venueId: bigint;
  url: string;
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.BIGINT,
  })
  venueId: bigint;

  @Column({
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
