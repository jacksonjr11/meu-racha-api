import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedule')
export class ScheduleEntity {
  @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'schedule_id' })
  id: string;
}
