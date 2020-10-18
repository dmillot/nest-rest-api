import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from "../../entities/quote";
import { QuoteService } from "./quote.service";
import { QuoteMapperService } from "../quote-mapper/quote-mapper.service";
import { MockType, repositoryMockFactory } from "../../../utils/repository.mock";

describe('QuoteService', () => {
  let service: QuoteService;
  let repository: MockType<Repository<Quote>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuoteService,
        QuoteMapperService,
        { provide: getRepositoryToken(Quote), useFactory: repositoryMockFactory }
      ],
    }).compile();

    repository = module.get<Repository<Quote>>(getRepositoryToken(Quote)) as unknown as MockType<Repository<Quote>>;
    service = module.get<QuoteService>(QuoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throws exception when quote not exists', async () => {
    repository.findOne.mockReturnValue(Promise.resolve(null));
    await expect(service.findOne(1)).rejects.toThrow('Not Found');
  });

});
