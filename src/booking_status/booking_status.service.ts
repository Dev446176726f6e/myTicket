import { Injectable } from '@nestjs/common';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';

@Injectable()
export class BookingStatusService {
  create(createBookingStatusDto: CreateBookingStatusDto) {
    return 'This action adds a new bookingStatus';
  }

  findAll() {
    return `This action returns all bookingStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookingStatus`;
  }

  update(id: number, updateBookingStatusDto: UpdateBookingStatusDto) {
    return `This action updates a #${id} bookingStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingStatus`;
  }
}
