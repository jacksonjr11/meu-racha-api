import { Injectable } from '@nestjs/common';
import { RachaEntity } from '../racha.entity';
import { Connection } from 'src/core/database/config/datatabse.config';

export const RachaRepositoryInterfaceToken = Symbol("RachaRepository");

export interface RachaRepository {
  save(payload: any): Promise<RachaEntity>;
  update(id:string, payload: any): Promise<RachaEntity>;
  delete(id:string): Promise<void>;
  findAll(filter?: any): Promise<RachaEntity[]>;
  findById(id:string): Promise<RachaEntity>;
}

@Injectable()
export default class RachaRepositoryImpl implements RachaRepository {

  constructor(private readonly connection: Connection) { }

  findAll(): Promise<RachaEntity[]> {
    return this.connection.query<RachaEntity>("SELECT * FROM public.racha racha where racha.nome");
  }

  save(payload: any): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }

  update(id: string, payload: any): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }
  
  delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(): Promise<RachaEntity> {
    throw new Error('Method not implemented.');
  }

}
