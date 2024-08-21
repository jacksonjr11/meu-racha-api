import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('establishment')
export class RachaController {
  constructor(private readonly findEsablishmentUseCase: any) {}

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
