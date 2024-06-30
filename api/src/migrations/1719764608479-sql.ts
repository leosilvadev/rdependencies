import { MigrationInterface, QueryRunner } from "typeorm";

export class Sql1719764608479 implements MigrationInterface {
    name = 'Sql1719764608479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package_comments" ADD "created_at" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package_comments" DROP COLUMN "created_at"`);
    }

}
