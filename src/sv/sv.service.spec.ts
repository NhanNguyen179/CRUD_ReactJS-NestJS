import { Test, TestingModule } from '@nestjs/testing';
import { SvService } from './sv.service';

describe('SvService', () => {
  let service: SvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SvService],
    }).compile();

    service = module.get<SvService>(SvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
