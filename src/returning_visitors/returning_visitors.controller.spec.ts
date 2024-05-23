import { Test, TestingModule } from '@nestjs/testing';
import { ReturningVisitorsController } from './returning_visitors.controller';

describe('ReturningVisitorsController', () => {
  let controller: ReturningVisitorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturningVisitorsController],
    }).compile();

    controller = module.get<ReturningVisitorsController>(ReturningVisitorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
