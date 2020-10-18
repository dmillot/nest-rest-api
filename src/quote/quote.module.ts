import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities';
import { QuoteService } from './services/quote/quote.service';
import { QuoteMapperService } from './services/quote-mapper/quote-mapper.service';
import { QuoteController } from './controllers/quote/quote.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quote])
  ],
  providers: [QuoteService, QuoteMapperService],
  controllers: [QuoteController]
})
export class QuoteModule {}
