import { MigrationInterface, QueryRunner } from "typeorm";

export class Sql1719257020395 implements MigrationInterface {
    name = 'Sql1719257020395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "packages" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "headline" character varying NOT NULL, "version" character varying NOT NULL, "license" character varying NOT NULL, "dependencies" text array NOT NULL, "imports" text array NOT NULL, "authors" text array NOT NULL, "created_at" TIMESTAMP NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_020801f620e21f943ead9311c98" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "packages"`);
    }

}
