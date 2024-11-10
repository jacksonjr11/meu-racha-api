import { Repository } from 'typeorm';
import { UserEntity } from '../../infra/database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export const UserInterfaceToken = Symbol('UserInterfaceToken');

export interface UserRepository {
  findById: (id: string) => Promise<UserEntity | null>;
  findAll: () => Promise<UserEntity[]>;
  create: (pro: any) => Promise<UserEntity>;
  delete: (id: string) => Promise<void>;
}

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}
  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.repository.findOne({ where: { id: id } });
    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async create(props: UserEntity): Promise<UserEntity> {
    return await this.repository.save(props);
  }

  async delete(id: string): Promise<void> {
    const user = await this.repository.findOne({ where: { id: id } });
    await this.repository.delete(user);
  }
}
