import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/model/event.model";

interface IAgeGroupCreationAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: "age_group" })
export class AgeGroup extends Model<AgeGroup, IAgeGroupCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.SMALLINT,
  })
  start_age: number;

  @Column({
    type: DataType.SMALLINT,
  })
  finish_age: number;

  @Column({
    type: DataType.SMALLINT,
  })
  gender: number;

  @HasMany(() => Event)
  events: Event[];
}
