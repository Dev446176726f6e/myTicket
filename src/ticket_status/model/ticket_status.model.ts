import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Ticket } from "../../ticket/model/ticket.model";

interface ITicketStatusCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "ticket_status", updatedAt: false })
export class TicketStatus extends Model<
  TicketStatus,
  ITicketStatusCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(40), allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @HasMany(() => Ticket)
  ticket: Ticket;
}
