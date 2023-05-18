import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
