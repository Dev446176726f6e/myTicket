import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
import { VenueType } from "../../venue_type/model/venue_type.model";

interface IVenueVenueTypeCreationAttr {
  venueId: number;
  venueTypeId: number;
}

@Table({ tableName: "venue_venue_type", timestamps: false })
export class VenueVenueType extends Model<
  VenueVenueType,
  IVenueVenueTypeCreationAttr
> {
  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venueId: number;

  @ForeignKey(() => VenueType)
  @Column({ type: DataType.INTEGER })
  venueTypeId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => VenueType)
  venue_type: VenueType;
}
