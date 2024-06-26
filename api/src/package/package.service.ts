import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Repository } from 'typeorm';
import { PackageDto } from './dto/package.dto';
import e from 'express';

@Injectable()
export class PackageService {

  constructor(
    @InjectRepository(Package)
    private repository: Repository<Package>
  ) {

  }

  create(createPackageDto: CreatePackageDto) {
    return 'This action adds a new package';
  }

  async findAll(): Promise<PackageDto[]> {
    return this.repository.find({order: { createdAt: "DESC" }}).then(entities => entities.map(entity => new PackageDto(entity)));
  }

  findOne(id: number) {
    return `This action returns a #${id} package`;
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return `This action updates a #${id} package`;
  }

  remove(id: number) {
    return `This action removes a #${id} package`;
  }
}
