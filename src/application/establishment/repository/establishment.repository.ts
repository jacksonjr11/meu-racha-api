import { Injectable } from '@nestjs/common';
import { Connection } from 'src/core/database/config/datatabse.config';

export const EstablishmentRepositoryInterfaceToken = Symbol('RachaRepository');

export interface EstablishmentRepository {
  saveFixedSchedule(payload: any): Promise<void>;
}

@Injectable()
export default class EstablishmentRepositoryImpl
  implements EstablishmentRepository
{
  constructor(private readonly connection: Connection) {}

  saveFixedSchedule(payload: any): Promise<any> {
    return this.connection.query(`
      insert into public.racha (nome) values ('teste');
    `);
  }
}
