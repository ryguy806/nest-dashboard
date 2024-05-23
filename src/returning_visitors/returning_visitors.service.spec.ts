import { Test, TestingModule } from '@nestjs/testing';
import { ReturningVisitorsService } from './returning_visitors.service';

describe('ReturningVisitorsService', () => {
  let service: ReturningVisitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturningVisitorsService],
    }).compile();

    service = module.get<ReturningVisitorsService>(ReturningVisitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
