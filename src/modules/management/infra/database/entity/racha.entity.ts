import { UserEntity } from 'src/modules/identity/infra/database/entities/user.entity';
import { ScheduleEntity } from 'src/modules/schedule/infra/database/entity/schedule.entity';
import { Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('racha')
export class RachaEntity {
  @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'racha_id' })
  id: string;

  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @JoinColumn({ name: 'schedule_id', referencedColumnName: 'id' })
  schedule: ScheduleEntity;
}
