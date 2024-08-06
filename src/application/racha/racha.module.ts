import RachaRepositoryImpl, { RachaRepositoryInterfaceToken } from './repository/racha.repository';
import { Module } from '@nestjs/common';
import { RachaController } from './controller/racha.controller';
import { RachaFilterUseCase } from './useCase/filter';

@Module({
  imports: [],
  controllers: [RachaController],
  providers: [RachaFilterUseCase,
    {
      provide: RachaRepositoryInterfaceToken,
      useClass: RachaRepositoryImpl
    }
  ],
})
export class RachaModule { }
