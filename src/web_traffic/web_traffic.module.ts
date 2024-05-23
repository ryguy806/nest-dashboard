import { Module } from '@nestjs/common';
import { WebTrafficController } from './web_traffic.controller';
import { WebTrafficService } from './web_traffic.service';

@Module({
  controllers: [WebTrafficController],
  providers: [WebTrafficService]
})
export class WebTrafficModule {}
