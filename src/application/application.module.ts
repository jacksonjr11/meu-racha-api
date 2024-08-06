import { Module } from '@nestjs/common';
import { RachaModule } from './racha/racha.module';

@Module({
  imports: [RachaModule],
})
export class ApplicationModule {}
