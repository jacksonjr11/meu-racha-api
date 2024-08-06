import { Injectable } from '@nestjs/common';
import { RachaEntity } from '../racha.entity';
import { Connection } from 'src/core/database/config/datatabse.config';

export const RachaRepositoryInterfaceToken = Symbol("RachaRepository");

export interface RachaRepository {
  save(): Promise<RachaEntity>;
  update(): Promise<RachaEntity>;
  delete(): Promise<void>;
  findAll(): Promise<RachaEntity[]>;
  findById(): Promise<RachaEntity>;
}

@Injectable()
export default class RachaRepositoryImpl implements RachaRepository {

  constructor(private readonly connection: Connection) { }

  findAll(): Promise<RachaEntity[]> {
    return this.connection.query<RachaEntity>('SELECT * FROM public.racha');
  }

  save(): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }

  update(): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }
  
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }

}
