import { Inject } from '@nestjs/common';
import { RachaRepository, RachaRepositoryInterfaceToken } from '../repository/racha.repository';
import { RachaEntity } from '../racha.entity';

export class RachaCreateUserCase {
  constructor(
    @Inject(RachaRepositoryInterfaceToken)
    private rachaRepository: RachaRepository
  ) { }

  async execute(): Promise<RachaEntity> {
    return await this.rachaRepository.save();
  }
}