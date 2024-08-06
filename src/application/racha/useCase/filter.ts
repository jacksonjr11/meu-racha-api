import { Inject } from '@nestjs/common';
import { RachaRepository, RachaRepositoryInterfaceToken } from '../repository/racha.repository';
import { RachaEntity } from '../racha.entity';

export class RachaFilterUseCase {
  constructor(
    @Inject(RachaRepositoryInterfaceToken)
    private rachaRepository: RachaRepository
  ) { }

  async execute(): Promise<RachaEntity[]> {
    return await this.rachaRepository.findAll();
  }
}
