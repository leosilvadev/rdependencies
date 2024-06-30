import { Module } from '@nestjs/common';
import { PackageCommentService } from './package_comment.service';
import { PackageCommentController } from './package_comment.controller';

@Module({
  controllers: [PackageCommentController],
  providers: [PackageCommentService],
})
export class PackageCommentModule {}
