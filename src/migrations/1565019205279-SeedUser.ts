import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

import { UserSeed } from "../seeds/user.seed";

export class SeedUser1565019205279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    	const seedUser = getRepository("user").save(UserSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
