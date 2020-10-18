import { Quote } from "../../entities/quote";
import { QuoteDto } from "../../dto/quote.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { EditQuoteDto } from "../../dto/edit-quote.dto";
import { Repository } from "typeorm";
import { AddQuoteDto } from "../../dto/add-quote.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { QuoteMapperService } from "../quote-mapper/quote-mapper.service";


@Injectable()
export class QuoteService {

  public constructor(
      @InjectRepository(Quote) private readonly quoteRepository: Repository<Quote>,
      private readonly quoteMapper: QuoteMapperService
    ) {}

  public async findAll(): Promise<QuoteDto[]> {
    const quotes = await this.quoteRepository.find();
    return quotes.map(this.quoteMapper.modelToDto);
  }

  public async findOne(id: number): Promise<QuoteDto> {
    const quote = await this.quoteRepository.findOne(id);
    if (quote === null || quote === undefined) throw new NotFoundException();
    return this.quoteMapper.modelToDto(quote);
  }

  public async add({ author, philosophy, quote }: AddQuoteDto): Promise<QuoteDto> {
    let quoteToAdd = new Quote(author, philosophy, quote);
    quoteToAdd = await this.quoteRepository.save(quoteToAdd);
    return this.quoteMapper.modelToDto(quoteToAdd);
  }

  public async edit(id: number, { author, philosophy, quote }: EditQuoteDto): Promise<QuoteDto> {
    let quoteToEdit = await this.quoteRepository.findOne(id);

    if (quoteToEdit === null || quoteToEdit === undefined) throw new NotFoundException();

    quoteToEdit.author = author;
    quoteToEdit.philosophy = philosophy;
    quoteToEdit.quote = quote;

    quoteToEdit = await this.quoteRepository.save(quoteToEdit);

    return this.quoteMapper.modelToDto(quoteToEdit);
  }

  public async remove(id: number): Promise<Quote> {
    let quote = await this.quoteRepository.findOne(id);

    if (quote === null || quote === undefined) throw new NotFoundException();

    quote = await this.quoteRepository.remove(quote);

    return quote;
  }

}
