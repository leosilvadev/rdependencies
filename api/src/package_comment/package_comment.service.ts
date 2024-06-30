import { Injectable } from '@nestjs/common';
import { CreatePackageCommentDto } from './dto/create-package_comment.dto';
import { UpdatePackageCommentDto } from './dto/update-package_comment.dto';

@Injectable()
export class PackageCommentService {
  create(createPackageCommentDto: CreatePackageCommentDto) {
    return 'This action adds a new packageComment';
  }

  findAll() {
    return `This action returns all packageComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packageComment`;
  }

  update(id: number, updatePackageCommentDto: UpdatePackageCommentDto) {
    return `This action updates a #${id} packageComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageComment`;
  }
}
