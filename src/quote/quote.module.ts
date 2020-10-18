import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteService } from './services/quote/quote.service';
import { QuoteMapperService } from './services/quote-mapper/quote-mapper.service';
import { QuoteController } from './controllers/quote/quote.controller';
import { Quote } from './entities/quote';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quote])
  ],
  providers: [QuoteService, QuoteMapperService],
  controllers: [QuoteController]
})
export class QuoteModule {}
