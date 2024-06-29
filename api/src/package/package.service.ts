import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { PackageDto } from './dto/package.dto';

@Injectable()
export class PackageService {

  constructor(
    @InjectRepository(Package)
    private repository: Repository<Package>
  ) {

  }

  create(dto: CreatePackageDto) {
    this.repository.save(Object.assign(new Package(), {...dto, createdAt: new Date()}));
  }

  async findAll(packageName?: string): Promise<PackageDto[]> {
    let builder = this.repository.createQueryBuilder("package");

    if (packageName) {
      builder = builder.where("UPPER(package.name) LIKE UPPER(:name)", { name: `%${packageName}%` });
    }
    
    return builder.orderBy({ created_at: 'DESC' })
      .getMany()
      .then(entities => entities.map(entity => new PackageDto(entity)));
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return this.repository.save(Object.assign(new Package(), {...updatePackageDto, id}));
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
