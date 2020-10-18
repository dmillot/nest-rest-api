import { Test, TestingModule } from '@nestjs/testing';
import { QuoteMapperService } from './quote-mapper.service';

describe('QuoteMapperService', () => {
  let service: QuoteMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteMapperService],
    }).compile();

    service = module.get<QuoteMapperService>(QuoteMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
