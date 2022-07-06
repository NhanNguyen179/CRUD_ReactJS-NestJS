import { Test, TestingModule } from '@nestjs/testing';
import { SvController } from './sv.controller';

describe('SvController', () => {
  let controller: SvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SvController],
    }).compile();

    controller = module.get<SvController>(SvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
