import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from './create-events.dto';
import { UpdateEventDto } from './update-events.dto';
import { Event } from './event.entity';
import { MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name); // *  this for logging the errors in more details
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get(':id') //! here we deFind  id param then we need to extract it in its controller
  //* like here i extracted
  async findOne(@Param('id') id) {
    this.logger.log('Hit the findOne route');
    const event = await this.repository.findOne({ where: { id: id } });
    this.logger.debug(`Found ${event == null ? 0 : event} events `);
    return event;
  }

  @Get()
  async getAll() {
    this.logger.log('Hit the getAll route');
    const event = await this.repository.find();
    this.logger.debug(`Found ${event.length} events`);
    return event;
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    const event = await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
    return event;
  }

  @Patch(':id')
  @HttpCode(200) //! this is used to input rewrite the status code.
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne(id);
    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const event = await this.repository.findOne(id);
    await this.repository.remove(event);
    return;
  }

  @Get('/practice/:id')
  async getDetails(@Param('id') id) {
    return await this.repository.find({
      where: { address: id },
    });
  }
}
