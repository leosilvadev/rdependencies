import { PackageComment } from "src/package_comment/entities/package_comment.entity";
import { Package } from "../entities/package.entity";

export class PackageDto {

    constructor(object: Package, comments?: PackageComment[]) {
        this.id = object.id
        this.name = object.name
        this.description = object.description
        this.headline = object.headline
        this.version = object.version
        this.license = object.license
        this.dependencies = object.dependencies
        this.imports = object.imports
        this.authors = object.authors
        this.createdAt = object.createdAt
        this.comments = comments
    }

    id: number;
    name: string;
    description: string;
    headline: string;
    version: string;
    license: string;
    dependencies: string[];
    imports: string[];
    authors: string[];
    createdAt: Date;
    comments: PackageComment[];

}
