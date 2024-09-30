import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Language } from "../../language/model/language.model";
import { CustomerCard } from "../../customer_card/model/customer_card.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birthdate: Date;
  gender: "male" | "female";
  lang_Id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer", timestamps: false })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  last_name: string;

  @Column({ type: DataType.STRING(100), allowNull: false, unique: true })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  hashed_password: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.DATE })
  birthdate: Date;

  @Column({ type: DataType.ENUM("male", "female") })
  gender: "male" | "female";

  @ForeignKey(() => Language)
  @Column({ type: DataType.INTEGER })
  lang_Id: number;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @HasMany(() => CustomerCard)
  cards: CustomerCard[];

  @HasMany(() => CustomerAddress)
  addresses: CustomerAddress[];

  // @HasMany(() => Language)
  // languages: Language[];
}
