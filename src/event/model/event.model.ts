import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "../../event_type/model/event_type.model";
import { AgeGroup } from "../../age_group/models/age_group.model";
import { Venue } from "../../venue/model/venue.model";
import { Language } from "../../language/model/language.model";
import { Ticket } from "../../ticket/model/ticket.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_Id: number;
  age_group_Id: number;
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

  @ForeignKey(() => EventType)
  event_type_Id: number;

  @ForeignKey(() => AgeGroup)
  age_group_Id: number;

  @ForeignKey(() => Venue)
  venueId: number;

  @ForeignKey(() => Language)
  langId: number;

  @Column({
    type: DataType.DATE,
  })
  release_date: string;

  @BelongsTo(() => EventType)
  event_type: EventType;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => AgeGroup)
  age_group: AgeGroup;

  @BelongsTo(() => Language)
  lang: Language;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
