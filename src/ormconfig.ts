import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const path = require("path");
const config: PostgresConnectionOptions = {
    type: 'postgres',
    url: 'postgres://password1:password@localhost:5432/SCHOOL_DB',
    entities: ["dist/**/*.entity{.ts,.js}"],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [path.join(__dirname, '../../../migrations/*{.ts,.js}')],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    }
};

export = config;