import { Module } from '@nestjs/common';
import { BounceRatesController } from './bounce_rates.controller';
import { BounceRatesService } from './bounce_rates.service';

@Module({
  controllers: [BounceRatesController],
  providers: [BounceRatesService]
})
export class BounceRatesModule {}
