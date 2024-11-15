import { Module } from '@nestjs/common';
import { IdentityModule } from './modules/identity/identity.module';
import { PrometheusModule } from './config/prometheus/prometheus.module';

@Module({
  imports: [IdentityModule, PrometheusModule],
})
export class AppModule {}
