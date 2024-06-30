import { Test, TestingModule } from '@nestjs/testing';
import { PackageCommentService } from './package_comment.service';

describe('PackageCommentService', () => {
  let service: PackageCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageCommentService],
    }).compile();

    service = module.get<PackageCommentService>(PackageCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
