import { Test, TestingModule } from '@nestjs/testing';
import { BounceRatesController } from './bounce_rates.controller';

describe('BounceRatesController', () => {
  let controller: BounceRatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BounceRatesController],
    }).compile();

    controller = module.get<BounceRatesController>(BounceRatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
