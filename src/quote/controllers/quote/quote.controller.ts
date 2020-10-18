import { QuoteService } from 'src/quote/services/quote/quote.service';
import { QuoteDto } from 'src/quote/dto/quote.dto';
import { EditQuoteDto } from 'src/quote/dto/edit-quote.dto';
import { AddQuoteDto } from 'src/quote/dto/add-quote.dto';

import {
    Controller, 
    Get,
    Param,
    Post,
    Put,
    Body,
    Delete
} from '@nestjs/common';

@Controller('quotes')
export class QuoteController {

    public constructor(private readonly quoteService: QuoteService) {}

  @Get()
  public findAll(): Promise<QuoteDto[]> {
    return this.quoteService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<QuoteDto> {
      return this.quoteService.findOne(id);
  }

  @Put(':id')
  public edit(@Param('id') id: number, @Body() quote: EditQuoteDto): Promise<QuoteDto> {
      return this.quoteService.edit(id, quote);
  }

  @Post()
  public add(@Body() quote: AddQuoteDto): Promise<QuoteDto> {
      return this.quoteService.add(quote);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<QuoteDto> {
      return this.quoteService.remove(id);
  }

}
