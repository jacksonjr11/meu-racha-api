import { Module } from '@nestjs/common';
import EstablishmentRepositoryImpl, {
  EstablishmentRepositoryInterfaceToken,
} from './repository/establishment.repository';
import { EstablishmentController } from './controller/establishment.controller';
import { AcceptFixedScheduleUseCase } from './useCase/accept-fixed-schedule/accept-fixed-shedule';

@Module({
  imports: [],
  controllers: [EstablishmentController],
  providers: [
    AcceptFixedScheduleUseCase,
    {
      provide: EstablishmentRepositoryInterfaceToken,
      useClass: EstablishmentRepositoryImpl,
    },
  ],
})
export class EstablishmentModule {}
