import { Test, TestingModule } from '@nestjs/testing';
import { WebTrafficController } from './web_traffic.controller';

describe('WebTrafficController', () => {
  let controller: WebTrafficController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebTrafficController],
    }).compile();

    controller = module.get<WebTrafficController>(WebTrafficController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
