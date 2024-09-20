import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/model/venue_type.model";
import { SeatType } from "./seat_type/model/seat_type.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [HumanCategory, VenueType, SeatType],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
