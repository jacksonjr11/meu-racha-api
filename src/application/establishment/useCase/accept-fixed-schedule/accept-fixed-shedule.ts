import { Inject, Injectable } from '@nestjs/common';
import {
  EstablishmentRepository,
  EstablishmentRepositoryInterfaceToken,
} from '../../repository/establishment.repository';

@Injectable()
export class AcceptFixedScheduleUseCase {
  constructor(
    @Inject(EstablishmentRepositoryInterfaceToken)
    private establishmentRepository: EstablishmentRepository,
  ) {}

  async execute(): Promise<any> {
    return await this.establishmentRepository.saveFixedSchedule({});
  }
}
