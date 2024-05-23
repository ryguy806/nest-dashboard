import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebTrafficModule } from './web_traffic/web_traffic.module';
import { SessionsModule } from './sessions/sessions.module';
import { BounceRatesModule } from './bounce_rates/bounce_rates.module';
import { UniquePageViewsModule } from './unique_page_views/unique_page_views.module';
import { NewVisitorsModule } from './new_visitors/new_visitors.module';
import { ReturningVisitorsModule } from './returning_visitors/returning_visitors.module';

@Module({
  imports: [WebTrafficModule, SessionsModule, BounceRatesModule, UniquePageViewsModule, NewVisitorsModule, ReturningVisitorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
