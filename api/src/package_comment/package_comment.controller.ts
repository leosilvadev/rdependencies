import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageCommentService } from './package_comment.service';
import { CreatePackageCommentDto } from './dto/create-package_comment.dto';
import { UpdatePackageCommentDto } from './dto/update-package_comment.dto';

@Controller('packages/:packageId/comments')
export class PackageCommentController {
  constructor(private readonly packageCommentService: PackageCommentService) {}

  @Post()
  create(@Param('packageId') packageId: string, @Body() dto: CreatePackageCommentDto) {
    return this.packageCommentService.create(+packageId, dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePackageCommentDto) {
    return this.packageCommentService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageCommentService.remove(+id);
  }
}
