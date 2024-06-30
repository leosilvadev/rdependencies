import { Injectable } from '@nestjs/common';
import { CreatePackageCommentDto } from './dto/create-package_comment.dto';
import { UpdatePackageCommentDto } from './dto/update-package_comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PackageComment } from './entities/package_comment.entity';
import { Repository } from 'typeorm';
import { PackageService } from 'src/package/package.service';
import { PackageCommentDto } from './dto/package_comment';

@Injectable()
export class PackageCommentService {

  constructor(
    @InjectRepository(PackageComment)
    private repository: Repository<PackageComment>,
    private packageService: PackageService
  ) {

  }

  async create(packageId: number, dto: CreatePackageCommentDto) {
    const pkg = await this.packageService.findOne(packageId);
    const comment = await this.repository.save(Object.assign(new PackageComment(), {...dto, createdAt: new Date(), package: pkg}));
    return new PackageCommentDto(comment);
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
