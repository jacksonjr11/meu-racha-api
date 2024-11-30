import { Module } from '@nestjs/common';
import { IdentityModule } from './modules/identity/identity.module';
import { PrometheusModule } from './config/prometheus/prometheus.module';
import { ManagementModule } from './modules/management/management.module';
import { ScheduleModule } from './modules/schedule/schedule.module';

@Module({
  imports: [IdentityModule, ManagementModule, ScheduleModule, PrometheusModule],
})
export class AppModule {}
