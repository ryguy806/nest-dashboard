import { Test, TestingModule } from '@nestjs/testing';
import { UniquePageViewsController } from './unique_page_views.controller';

describe('UniquePageViewsController', () => {
  let controller: UniquePageViewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniquePageViewsController],
    }).compile();

    controller = module.get<UniquePageViewsController>(UniquePageViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
