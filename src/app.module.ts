import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './core/database/config/datatabse.config';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [DbModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
