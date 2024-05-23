import { Module } from '@nestjs/common';
import { UniquePageViewsController } from './unique_page_views.controller';
import { UniquePageViewsService } from './unique_page_views.service';

@Module({
  controllers: [UniquePageViewsController],
  providers: [UniquePageViewsService]
})
export class UniquePageViewsModule {}
