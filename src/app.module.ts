import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/model/venue_type.model";
import { SeatType } from "./seat_type/model/seat_type.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/model/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/model/venue_photo.model";
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
import { EventModule } from "./event/event.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { LanguageModule } from "./language/language.module";
import { EventType } from "./event_type/model/event_type.model";
import { Language } from "./language/model/language.model";
import { Event } from "./event/model/event.model";
import { AgeGroupModule } from "./age_group/age_group.module";
import { AgeGroup } from "./age_group/models/age_group.model";
import { TicketModule } from "./ticket/ticket.module";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { TicketStatus } from "./ticket_status/model/ticket_status.model";
import { Ticket } from "./ticket/model/ticket.model";
import { CartStatusModule } from './cart_status/cart_status.module';
import { BookingStatusModule } from './booking_status/booking_status.module';

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
        AgeGroup,
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
        EventType,
        Language,
        Event,
        TicketStatus,
        Ticket,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    AgeGroupModule,
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
    LanguageModule,
    TicketModule,
    TicketStatusModule,
    CartStatusModule,
    BookingStatusModule,
    // UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
