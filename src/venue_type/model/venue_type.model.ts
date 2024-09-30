import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";

interface VenueTypeAttr {
  name: string;
}

@Table({ tableName: "venue_type", updatedAt: false })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Venue, () => VenueVenueType)
  venues: Venue[];
}
