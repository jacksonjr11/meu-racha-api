import 'dotenv/config'
import { Injectable, Inject, Module, Global } from '@nestjs/common';
import { Pool, Connection as ConnectionLib, QueryResult } from 'pg';

const PG_CONNECTION = 'PG_CONNECTION';

const dbProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  }),
};

Injectable()
export class Connection {
  constructor(@Inject(PG_CONNECTION) private readonly connection: ConnectionLib) { }

  async query<T>(text: string): Promise<T[]> {
    const queryResult = this.connection.query(text) as any as Promise<QueryResult<T>>;
    const res = await queryResult;
    return res.rows;
  }
}


@Global()
@Module({
  providers: [dbProvider, Connection],
  exports: [dbProvider, Connection],
})
export class DbModule { }
