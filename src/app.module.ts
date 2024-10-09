import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DbModule } from 'database/database.provider';

@Module({
  imports: [DbModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
