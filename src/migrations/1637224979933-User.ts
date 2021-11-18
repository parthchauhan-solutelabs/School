import {MigrationInterface, QueryRunner} from "typeorm";

export class User1637224979933 implements MigrationInterface {
    name = 'User1637224979933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("id" SERIAL NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" integer, "userId" integer, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phonenumber" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" SERIAL NOT NULL, "age" integer NOT NULL, "school_id" integer, "userId" integer, "created_by" integer, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" integer, "member_id" integer, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "Roll_no" integer NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "teacherId" integer, "schoolId" integer, "userId" integer, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "journal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "Notes" character varying NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "studentId" integer, CONSTRAINT "PK_396f862c229742e29f888b1abce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_0394b0bd47c97294d331bb5f960" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_4f596730e16ee49d9b081b5d8e5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_08897b166dee565859b7fb2fcc8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school" ADD CONSTRAINT "FK_065d8d144bc7f8e21a21984a358" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_c375f35160f921f4fab5f515d30" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_b35463776b4a11a3df3c30d920a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "journal" ADD CONSTRAINT "FK_ace8e881a0e10680ce61bf2ff14" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "journal" DROP CONSTRAINT "FK_ace8e881a0e10680ce61bf2ff14"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_b35463776b4a11a3df3c30d920a"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_c375f35160f921f4fab5f515d30"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_f4481746c56ffa6cf77829a4bcc"`);
        await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_065d8d144bc7f8e21a21984a358"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_08897b166dee565859b7fb2fcc8"`);
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_4f596730e16ee49d9b081b5d8e5"`);
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_0394b0bd47c97294d331bb5f960"`);
        await queryRunner.query(`DROP TABLE "journal"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "school"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
