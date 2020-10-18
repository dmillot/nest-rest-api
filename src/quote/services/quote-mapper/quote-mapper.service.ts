import { Quote } from "../../entities/quote";
import { QuoteDto } from "../../dto/quote.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuoteMapperService {

  public modelToDto({ id, author, philosophy, quote }: Quote): QuoteDto {
      return new QuoteDto({ id, author, philosophy, quote });
    }

}
