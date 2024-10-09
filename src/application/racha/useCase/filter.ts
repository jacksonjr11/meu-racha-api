import { Inject, Injectable } from '@nestjs/common';
import {
  RachaRepository,
  RachaRepositoryInterfaceToken,
} from '../repository/racha.repository';

@Injectable()
export class RachaFilterUseCase {
  constructor(
    @Inject(RachaRepositoryInterfaceToken)
    private readonly repository: RachaRepository,
  ) {}

  async execute(): Promise<any[]> {
    return await this.repository.findAll();
  }
}
