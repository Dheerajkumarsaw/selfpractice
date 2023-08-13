import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/event.entity';
import { EventsController } from 'src/events/events.controller';
import { Attendee } from './attendee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee])], //* when we use repository injection method then we should say tha here],
  controllers: [EventsController],
})
export class EventsModule {}
