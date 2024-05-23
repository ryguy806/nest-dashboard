import { Test, TestingModule } from '@nestjs/testing';
import { WebTrafficService } from './web_traffic.service';

describe('WebTrafficService', () => {
  let service: WebTrafficService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebTrafficService],
    }).compile();

    service = module.get<WebTrafficService>(WebTrafficService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
