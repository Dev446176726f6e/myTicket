import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Seat } from "../../seat/model/seat.model";

interface ISeatTypeAttr {
  name: string;
}

@Table({ tableName: "seat_type", updatedAt: false })
export class SeatType extends Model<SeatType, ISeatTypeAttr> {
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

  @HasMany(() => Seat)
  seats: Seat[];
}
