import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
import { SeatType } from "../../seat_type/model/seat_type.model";
import { Ticket } from "../../ticket/model/ticket.model";

interface ISeatCreationAttr {
  sector: number;
  row_number: number;
  number: number;
  venuId: number;
  seat_type_Id: number;
  location_in_schema: string[];
}

@Table({ tableName: "seat", timestamps: false })
export class Seat extends Model<Seat, ISeatCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sector: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  venuId: number;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_Id: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  location_in_schema: string[];

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => SeatType)
  seat_type: SeatType;

  @HasOne(() => Ticket)
  ticket: Ticket;
}
