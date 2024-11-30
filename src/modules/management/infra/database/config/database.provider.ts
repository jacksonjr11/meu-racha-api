import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const ManagementDatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.DB_USER,
  host: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  schema: 'management',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};

@Module({
  imports: [TypeOrmModule.forRoot(ManagementDatabaseConfig)],
})
export class ManagementDatabaseModule {}
