import { Test, TestingModule } from '@nestjs/testing';
import { BounceRatesService } from './bounce_rates.service';

describe('BounceRatesService', () => {
  let service: BounceRatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BounceRatesService],
    }).compile();

    service = module.get<BounceRatesService>(BounceRatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
