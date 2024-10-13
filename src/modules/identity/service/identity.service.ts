import { Injectable } from '@nestjs/common';
import { UserEntity } from '../infra/database/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IdentityService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findByFilter() {
    return await this.userRepository.find();
  }
}
