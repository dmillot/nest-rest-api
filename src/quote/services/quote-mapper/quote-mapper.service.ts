import { Injectable } from '@nestjs/common';
import { Quote } from '../../entities';
import { QuoteDto } from '../../dto';

@Injectable()
export class QuoteMapperService {

  public modelToDto({ id, author, philosophy, quote }: Quote): QuoteDto {
      return new QuoteDto({ id, author, philosophy, quote });
    }

}
