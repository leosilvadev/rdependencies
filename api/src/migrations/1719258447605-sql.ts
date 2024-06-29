import { MigrationInterface, QueryRunner } from "typeorm";

export class Sql1719258447605 implements MigrationInterface {
    name: 'Sql1719258447605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const toSqlArray = (array) => {
            return `{${array.map(i => `"${i}"`).join(`,`)}}`
        };

        const response = await fetch('https://600eda693bb1d100179e04dc.mockapi.io/api/v1/packages');
        const json = await response.json();

        let values = '';

        json.forEach(item => {
            values += `('${item.name}', '${item.headline}', '${item.version}', '${item.license}', '${toSqlArray(item.dependencies)}', '${toSqlArray(item.imports)}', '${toSqlArray(item.authors)}', '${item.created_at}', '${item.description}'),`;
        });

        const sql = `
        INSERT INTO "packages" (
            "name",
            "headline",
            "version",
            "license",
            "dependencies",
            "imports",
            "authors",
            "created_at",
            "description"
        ) VALUES ${values.slice(0, -1)}
        `;

        await queryRunner.query(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
