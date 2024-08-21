import { Inject } from '@nestjs/common';
import { RachaRepository, RachaRepositoryInterfaceToken } from '../../repository/racha.repository';
import { RachaEntity } from '../../racha.entity';
import { CreateRachaOutput } from './output';
import { CreateRachaInput } from './input';

export class RachaCreateUserCase {
  constructor(
    @Inject(RachaRepositoryInterfaceToken)
    private rachaRepository: RachaRepository
  ) { }

  async execute(input: CreateRachaInput) {
    if(!input?.scheduleId) {
      throw new Error('Method not implemented.');
    }
    
    return await this.rachaRepository.save(input);
  }

  private mapperToDto(data: RachaEntity): CreateRachaOutput {
    return null;
  }
}