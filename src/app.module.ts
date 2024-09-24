import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/model/venue_type.model";
import { SeatType } from "./seat_type/model/seat_type.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/model/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/model/venue_photo.model";
import { RegionController } from "./region/region.controller";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/model/region.model";
import { VenueVenueTypeModule } from "./venue_venue_type/venue_venue_type.module";
import { VenueVenueType } from "./venue_venue_type/models/venue_venue_type.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/model/role.model";
// import { UsersModule } from "./users/users.module";
import { User } from "./users/model/user.model";
import { UserRoles } from "./users/model/user-role.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/model/district.model";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/model/seat.model";
import { EventModule } from './event/event.module';
import { EventTypeModule } from './event_type/event_type.module';

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
      models: [
        HumanCategory,
        VenueType,
        SeatType,
        Venue,
        VenuePhoto,
        Region,
        VenueVenueType,
        Role,
        User,
        UserRoles,
        District,
        Seat,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    VenueModule,
    VenuePhotoModule,
    RegionModule,
    VenueVenueTypeModule,
    RolesModule,
    DistrictModule,
    SeatModule,
    EventModule,
    EventTypeModule,
    // UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
