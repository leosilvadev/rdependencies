import { IsNotEmpty } from 'class-validator';

export class CreatePackageDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    headline: string;

    @IsNotEmpty()
    version: string;

    @IsNotEmpty()
    license: string;

    @IsNotEmpty()
    dependencies: string[];

    @IsNotEmpty()
    imports: string[];

    @IsNotEmpty()
    authors: string[];
    
}
