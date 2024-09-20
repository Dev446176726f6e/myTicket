import { Column, DataType, Model, Table } from "sequelize-typescript";

interface HumanCategoryAttr {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
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
}
