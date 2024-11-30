import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RachaEntity } from '../../infra/database/entity/racha.entity';

export const RachaInterfaceToken = Symbol('RachaInterfaceToken');

export interface RachaRepository {
  findById: (id: string) => Promise<RachaEntity | null>;
  findAll: () => Promise<RachaEntity[]>;
  save: (pro: RachaEntity) => Promise<RachaEntity>;
  delete: (id: string) => Promise<void>;
}

export class RachaRepositoryImpl implements RachaRepository {
  constructor(
    @InjectRepository(RachaEntity)
    private readonly repository: Repository<RachaEntity>,
  ) {}
  async findById(id: string): Promise<RachaEntity | null> {
    const racha = await this.repository.findOne({ where: { id: id } });
    return racha;
  }

  async findAll(): Promise<RachaEntity[]> {
    return await this.repository.find();
  }

  async save(props: RachaEntity): Promise<RachaEntity> {
    return await this.repository.save(props);
  }

  async delete(id: string): Promise<void> {
    const racha = await this.repository.findOne({ where: { id: id } });
    await this.repository.delete(racha);
  }
}
