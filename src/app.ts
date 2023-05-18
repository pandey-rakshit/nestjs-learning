import { Module } from '@nestjs/common';
import { CatsModule } from './cats';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
