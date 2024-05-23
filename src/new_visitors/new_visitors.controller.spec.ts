import { Test, TestingModule } from '@nestjs/testing';
import { NewVisitorsController } from './new_visitors.controller';

describe('NewVisitorsController', () => {
  let controller: NewVisitorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewVisitorsController],
    }).compile();

    controller = module.get<NewVisitorsController>(NewVisitorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
