import { Module } from '@nestjs/common';
import { RachaModule } from './racha/racha.module';
import { EstablishmentModule } from './establishment/establishment.module';

@Module({
  imports: [RachaModule, EstablishmentModule],
})
export class ApplicationModule {}
