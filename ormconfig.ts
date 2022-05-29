module.exports ={
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: ["../**/*.entity.ts"],
    migrations: ["src/database/migrations/*.ts"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/database/migrations/"
    }
  }