import { Test, TestingModule } from '@nestjs/testing';
import { NewVisitorsService } from './new_visitors.service';

describe('NewVisitorsService', () => {
  let service: NewVisitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewVisitorsService],
    }).compile();

    service = module.get<NewVisitorsService>(NewVisitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
