import { Test, TestingModule } from '@nestjs/testing';
import { PackageCommentController } from './package_comment.controller';
import { PackageCommentService } from './package_comment.service';

describe('PackageCommentController', () => {
  let controller: PackageCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageCommentController],
      providers: [PackageCommentService],
    }).compile();

    controller = module.get<PackageCommentController>(PackageCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
