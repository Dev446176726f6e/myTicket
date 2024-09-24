import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "src/event/model/event.model";
import { Seat } from "src/seat/model/seat.model";
import { TicketStatus } from "src/ticket_status/model/ticket_status.model";

interface ITicketCreationAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  // ticket_type: number;
}

@Table({ tableName: "ticket", updatedAt: false })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({ type: DataType.INTEGER, allowNull: false })
  eventId: number;

  @ForeignKey(() => Seat)
  @Column({ type: DataType.INTEGER, allowNull: false })
  seatId: number;

  @Column({
    type: DataType.DECIMAL,
  })
  price: number;

  @Column({
    type: DataType.DECIMAL,
  })
  service_fee: number;

  @ForeignKey(() => TicketStatus)
  @Column({ type: DataType.INTEGER, allowNull: false })
  statusId: number;

  @BelongsTo(() => TicketStatus)
  status: TicketStatus;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Seat)
  seat: Seat;
}
