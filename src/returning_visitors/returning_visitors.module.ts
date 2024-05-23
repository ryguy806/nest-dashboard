import { Module } from '@nestjs/common';
import { ReturningVisitorsController } from './returning_visitors.controller';
import { ReturningVisitorsService } from './returning_visitors.service';

@Module({
  controllers: [ReturningVisitorsController],
  providers: [ReturningVisitorsService]
})
export class ReturningVisitorsModule {}
