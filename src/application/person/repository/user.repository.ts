import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { Connection } from 'database/config/datatabse.config';

export const UserRepositoryInterfaceToken = Symbol("UserRepository");

export interface UserRepository {
  findAll(): Promise<UserEntity[]>;
}

@Injectable()
export default class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly connection: Connection
  ) { }

  async findAll(): Promise<UserEntity[]> {
    const query = this.connection.query('SELECT * FROM public.user') as any;
    const res = await query;
    return res.rows;
  }
}
