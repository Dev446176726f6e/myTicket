import { Column, DataType, Model, Table } from "sequelize-typescript";

interface VenueTypeAttr {
  name: string;
}

@Table({ tableName: "venue_type", updatedAt: false })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
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
