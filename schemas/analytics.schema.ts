import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnalyticsDocument = HydratedDocument<Anylytics>;

@Schema()
export class Anylytics {
  @Prop()
  date: Date;

  @Prop()
  sessions: number;

  @Prop()
  bounce_rates: number;

  @Prop()
  unique_page_views: number;

  @Prop()
  new_visitors: number;

  @Prop()
  returning_visitors: number;

  @Prop()
  web_traffic: number;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Anylytics);
