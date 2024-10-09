import RachaRepositoryImpl, {
  RachaRepositoryInterfaceToken,
} from './repository/racha.repository';
import { Module } from '@nestjs/common';
import { RachaController } from './controller/racha.controller';
import { RachaFilterUseCase } from './useCase/filter';
import { RachaEntity } from 'database/entities/racha.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RachaEntity])],
  controllers: [RachaController],
  providers: [
    RachaFilterUseCase,
    {
      provide: RachaRepositoryInterfaceToken,
      useClass: RachaRepositoryImpl,
    },
  ],
})
export class RachaModule {}
