import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleDatabaseModule } from './infra/database/config/database.provider';
import { ScheduleEntity } from './infra/database/entity/schedule.entity';

@Module({
  imports: [ScheduleDatabaseModule, TypeOrmModule.forFeature([ScheduleEntity])],
  controllers: [],
  providers: [],
})
export class ScheduleModule {}
