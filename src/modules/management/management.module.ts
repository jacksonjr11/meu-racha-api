import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagementDatabaseModule } from './infra/database/config/database.provider';

import {
  RachaInterfaceToken,
  RachaRepositoryImpl,
} from './repository/racha/racha.repository';
import { RachaService } from './service/racha.service';
import { RachaEntity } from './infra/database/entity/racha.entity';
import { RachaController } from './controller/racha/racha.controller';

@Module({
  imports: [ManagementDatabaseModule, TypeOrmModule.forFeature([RachaEntity])],
  controllers: [RachaController],
  providers: [
    RachaService,
    {
      provide: RachaInterfaceToken,
      useClass: RachaRepositoryImpl,
    },
  ],
})
export class ManagementModule {}
