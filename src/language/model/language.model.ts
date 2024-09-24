import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "src/event/model/event.model";

interface ILanguageCreationAttr {
  name: string;
}

@Table({ tableName: "language", timestamps: false })
export class Language extends Model<Language, ILanguageCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;

  @HasMany(() => Event)
  event: Event[];
}
