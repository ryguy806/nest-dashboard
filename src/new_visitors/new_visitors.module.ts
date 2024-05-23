import { Module } from '@nestjs/common';
import { NewVisitorsController } from './new_visitors.controller';
import { NewVisitorsService } from './new_visitors.service';

@Module({
  controllers: [NewVisitorsController],
  providers: [NewVisitorsService]
})
export class NewVisitorsModule {}
