import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SeatTypeAttr {
  name: string;
}

@Table({ tableName: "seat_type", updatedAt: false })
export class SeatType extends Model<SeatType, SeatTypeAttr> {
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
}
