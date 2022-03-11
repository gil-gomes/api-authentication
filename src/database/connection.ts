import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { dbConfig } from './db-config';

export const TypeOrmConfigFactory = (): TypeOrmModuleOptions => ({
    type: "mysql",
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: false,
    // entities: [__dirname + "**/entities/*.entity{.ts,.js}"],
    entities: [User],
  });