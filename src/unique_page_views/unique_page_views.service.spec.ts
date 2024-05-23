import { Test, TestingModule } from '@nestjs/testing';
import { UniquePageViewsService } from './unique_page_views.service';

describe('UniquePageViewsService', () => {
  let service: UniquePageViewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniquePageViewsService],
    }).compile();

    service = module.get<UniquePageViewsService>(UniquePageViewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
