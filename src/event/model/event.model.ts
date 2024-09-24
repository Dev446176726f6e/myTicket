import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "src/event_type/entities/event_type.entity";
import { HumanCategory } from "src/human_category/models/human_category.model";
import { Venue } from "src/venue/model/venue.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_Id: number;
  human_category_Id: number;
  venueId: number;
  langId: number;
  release_date: string;
}

@Table({ tableName: "event", timestamps: false })
export class Event extends Model<Event, IEventCreationAttr> {
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

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATEONLY,
  })
  start_date: string;

  @Column({
    type: DataType.TIME,
  })
  start_time: string;

  @Column({
    type: DataType.DATEONLY,
  })
  finish_date: string;

  @Column({
    type: DataType.TIME,
  })
  finish_time: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  //   @ForeignKey(() => EventType)
  //   event_type_Id: number;

  //   @ForeignKey(() => HumanCategory)
  //   human_category_Id: number;

  //   @ForeignKey(() => Venue)
  //   venueId: number;

  //   @ForeignKey(() => Language)
  //   langId: number;

  @Column({
    type: DataType.DATE,
  })
  release_date: string;
}
