import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const ClosureDatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.DB_USER,
  host: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  schema: 'identity',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(ClosureDatabaseConfig)],
})
export class ClosureDatabaseModule {}