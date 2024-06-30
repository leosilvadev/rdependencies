import { Module } from '@nestjs/common';
import { PackageCommentService } from './package_comment.service';
import { PackageCommentController } from './package_comment.controller';
import { PackageModule } from 'src/package/package.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageComment } from './entities/package_comment.entity';

@Module({
  imports: [PackageModule, TypeOrmModule.forFeature([PackageComment])],
  controllers: [PackageCommentController],
  providers: [PackageCommentService],
})
export class PackageCommentModule {}
