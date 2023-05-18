import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from '../services';
import { Cat } from '../interfaces';
import { CreateCatDto } from '../dtos';

@Controller('cats')
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @Get('')
  findAll(): Promise<Cat[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() CreateCatDto: CreateCatDto): void {
    this.service.create(CreateCatDto);
  }
}
