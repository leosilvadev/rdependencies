import { PackageComment } from "../entities/package_comment.entity";

export class PackageCommentDto {

    constructor(packageComment: PackageComment) {
        this.text = packageComment.text
        this.createdAt = packageComment.createdAt
    }

    text: string;

    createdAt: Date;

}
