import { Controller } from '@nestjs/common';
import { CatsService } from '../services';

@Controller('cats')
export class CatsController {
  constructor(private readonly service: CatsService) {}
}
