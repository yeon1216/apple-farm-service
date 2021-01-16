import {MigrationInterface, QueryRunner} from "typeorm";

export class initDatabase1610781985443 implements MigrationInterface {
    name = 'initDatabase1610781985443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" SERIAL NOT NULL, "uid" character varying NOT NULL, "title" character varying NOT NULL DEFAULT '', "content" character varying NOT NULL DEFAULT '', CONSTRAINT "UQ_6274415d307cf68509565be4a4c" UNIQUE ("uid"), CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "uid" character varying NOT NULL, "username" character varying NOT NULL DEFAULT '', "email" character varying NOT NULL DEFAULT '', "profileUrl" character varying NOT NULL, CONSTRAINT "UQ_df955cae05f17b2bcf5045cc021" UNIQUE ("uid"), CONSTRAINT "UQ_778e9efdeb1144b832604e2b311" UNIQUE ("profileUrl"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
