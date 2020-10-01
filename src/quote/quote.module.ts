import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quote])
  ],
  providers: [],
  controllers: []
})
export class QuoteModule {}
