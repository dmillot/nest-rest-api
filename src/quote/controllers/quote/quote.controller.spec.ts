import { Test, TestingModule } from '@nestjs/testing';
import { QuoteService } from "../../services/quote/quote.service";
import { QuoteController } from "./quote.controller";
import {QuoteMapperService} from "../../services/quote-mapper/quote-mapper.service";
import {getRepositoryToken} from "@nestjs/typeorm";
import {Quote} from "../../entities/quote";
import {repositoryMockFactory} from "../../../utils/repository.mock";

describe('QuoteController', () => {
  let controller: QuoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [
          QuoteMapperService,
          QuoteService,
          { provide: getRepositoryToken(Quote), useFactory: repositoryMockFactory }
      ],
    }).compile();

    controller = module.get<QuoteController>(QuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
