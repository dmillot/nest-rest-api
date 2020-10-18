import { Injectable } from '@nestjs/common';
import { QuoteDto } from 'src/quote/dto/quote.dto';
import { Quote } from 'src/quote/entities/quote';

@Injectable()
export class QuoteMapperService {

  public modelToDto({ id, author, philosophy, quote }: Quote): QuoteDto {
      return new QuoteDto({ id, author, philosophy, quote });
    }

}
