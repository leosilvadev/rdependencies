import { IsNotEmpty } from "class-validator";

export class CreatePackageCommentDto {

    @IsNotEmpty()
    text: string;

}
