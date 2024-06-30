import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageCommentService } from './package_comment.service';
import { CreatePackageCommentDto } from './dto/create-package_comment.dto';
import { UpdatePackageCommentDto } from './dto/update-package_comment.dto';

@Controller('package-comment')
export class PackageCommentController {
  constructor(private readonly packageCommentService: PackageCommentService) {}

  @Post()
  create(@Body() createPackageCommentDto: CreatePackageCommentDto) {
    return this.packageCommentService.create(createPackageCommentDto);
  }

  @Get()
  findAll() {
    return this.packageCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageCommentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageCommentDto: UpdatePackageCommentDto) {
    return this.packageCommentService.update(+id, updatePackageCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageCommentService.remove(+id);
  }
}
