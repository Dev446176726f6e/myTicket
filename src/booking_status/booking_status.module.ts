import { Module } from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { BookingStatusController } from './booking_status.controller';

@Module({
  controllers: [BookingStatusController],
  providers: [BookingStatusService],
})
export class BookingStatusModule {}
