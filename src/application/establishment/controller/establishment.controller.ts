import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AcceptFixedScheduleUseCase } from '../useCase/accept-fixed-schedule/accept-fixed-shedule';

@Controller('establishment')
export class EstablishmentController {
  constructor(
    private readonly findEsablishmentUseCase: AcceptFixedScheduleUseCase,
  ) {}

  @Get()
  filter(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }

  @Post()
  create(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }

  @Put()
  update(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }

  @Patch()
  inativeUser(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }

  @Delete()
  delete(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }

  @Get('schedules')
  filterSchedules(): Promise<any[]> {
    return this.findEsablishmentUseCase.execute();
  }
}
