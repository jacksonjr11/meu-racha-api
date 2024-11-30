import { Body, Controller, Post } from '@nestjs/common';
import { RachaService } from '../../service/racha.service';
import { RachaInput } from './dto/input';

@Controller('racha')
export class RachaController {
  constructor(private readonly rachaService: RachaService) {}

  @Post()
  create(@Body() input: RachaInput) {
    return this.rachaService.create(input);
  }
}
