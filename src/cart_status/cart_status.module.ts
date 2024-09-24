import { Module } from '@nestjs/common';
import { CartStatusService } from './cart_status.service';
import { CartStatusController } from './cart_status.controller';

@Module({
  controllers: [CartStatusController],
  providers: [CartStatusService],
})
export class CartStatusModule {}
