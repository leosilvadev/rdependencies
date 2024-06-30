import { MigrationInterface, QueryRunner } from "typeorm";

export class Sql1719762737942 implements MigrationInterface {
    name = 'Sql1719762737942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "package_comments" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "package_id" integer, CONSTRAINT "PK_56d173d5e8142c3945eb5dd211a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "package_comments" ADD CONSTRAINT "FK_c3cdaf74dbe0bb3a9d48bc1bf69" FOREIGN KEY ("package_id") REFERENCES "packages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "package_comments" DROP CONSTRAINT "FK_c3cdaf74dbe0bb3a9d48bc1bf69"`);
        await queryRunner.query(`DROP TABLE "package_comments"`);
    }

}
