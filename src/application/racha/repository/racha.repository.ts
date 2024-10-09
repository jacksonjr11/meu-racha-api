import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RachaEntity } from 'database/entities/racha.entity';
import { Repository } from 'typeorm';

export const RachaRepositoryInterfaceToken = Symbol('RachaRepository');

export interface RachaRepository {
  findAll(filter?: any): Promise<RachaEntity[]>;
}

@Injectable()
export default class RachaRepositoryImpl implements RachaRepository {
  constructor(
    @InjectRepository(RachaEntity)
    private readonly repository: Repository<RachaEntity>,
  ) {}

  findAll(): Promise<RachaEntity[]> {
    return this.repository.find();
  }
}
