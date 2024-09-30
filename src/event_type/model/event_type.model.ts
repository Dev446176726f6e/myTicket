import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "../../event/model/event.model";

interface IEventTypeCreationAttr {
  name: string;
  description: string;
  category: string;
  parent_event_type_Id: number;
}

@Table({ tableName: "event_type", timestamps: false })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  category: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  parent_event_type_Id: number;

  @BelongsTo(() => EventType, { as: "parentEventType" })
  parent_event_type: EventType;

  @HasMany(() => EventType, { as: "childEventTypes" })
  child_event_types: EventType[];

  @HasMany(() => Event)
  events: Event[];
}
