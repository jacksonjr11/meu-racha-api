import { Module } from '@nestjs/common';
import { DbModule } from './core/database/config/datatabse.config';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [DbModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
