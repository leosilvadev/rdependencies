import { PartialType } from '@nestjs/mapped-types';
import { CreatePackageCommentDto } from './create-package_comment.dto';

export class UpdatePackageCommentDto extends PartialType(CreatePackageCommentDto) {}
