import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { RachaFilterUseCase } from '../useCase/filter';
import { RachaEntity } from '../racha.entity';

@Controller("racha")
export class RachaController {
  constructor(private readonly findRachaUseCase: RachaFilterUseCase) { }

  @Get()
  filter(): Promise<RachaEntity[]> {
    return this.findRachaUseCase.execute();
  }

  @Post()
  create(): Promise<RachaEntity[]> {
    return this.findRachaUseCase.execute();
  }

  @Put()
  update(): Promise<RachaEntity[]> {
    return this.findRachaUseCase.execute();
  }

  @Patch()
  inativeUser(): Promise<RachaEntity[]> {
    return this.findRachaUseCase.execute();
  }

  @Delete()
  delete(): Promise<RachaEntity[]> {
    return this.findRachaUseCase.execute();
  }
}
