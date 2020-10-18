import { Quote } from "./entities/quote";
import { QuoteService } from "./services/quote/quote.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuoteMapperService } from "./services/quote-mapper/quote-mapper.service";
import { QuoteController } from "./controllers/quote/quote.controller";
import { Module } from "@nestjs/common";


@Module({
  imports: [
    TypeOrmModule.forFeature([Quote])
  ],
  providers: [QuoteService, QuoteMapperService],
  controllers: [QuoteController]
})
export class QuoteModule {}
