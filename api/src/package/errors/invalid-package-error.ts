import { HttpException } from "@nestjs/common";

export class InvalidPackageError extends HttpException {
    constructor() {
        super('Invalid Package', 404);
    }
}