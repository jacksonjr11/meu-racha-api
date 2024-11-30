import { Inject, Injectable } from '@nestjs/common';
import {
  RachaInterfaceToken,
  RachaRepository,
} from '../repository/racha/racha.repository';
import { RachaEntity } from '../infra/database/entity/racha.entity';
import { UserEntity } from 'src/modules/identity/infra/database/entities/user.entity';
import { ScheduleEntity } from 'src/modules/schedule/infra/database/entity/schedule.entity';
import { RachaInput } from '../controller/racha/dto/input';

@Injectable()
export class RachaService {
  constructor(
    @Inject(RachaInterfaceToken)
    private readonly rachaRepository: RachaRepository,
  ) {}

  public async create(input: RachaInput): Promise<any> {
    console.log(input);
    const user = new UserEntity();
    user.id = input.userId;

    const schedule = new ScheduleEntity();
    schedule.id = input.scheduleId;

    const entity: RachaEntity = {
      id: null,
      user,
      schedule,
    };

    const result = this.rachaRepository.save(entity);
    return result;
  }
}
