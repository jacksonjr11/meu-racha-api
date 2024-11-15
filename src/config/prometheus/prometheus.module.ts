import { Module, Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as client from 'prom-client';

@Controller('metrics')
class MetricsController {
  @Get()
  async getMetrics(@Res() response: Response) {
    response.set('Content-Type', client.register.contentType);
    response.end(await client.register.metrics());
  }
}

@Module({
  controllers: [MetricsController],
})
export class PrometheusModule {
  constructor() {
    client.collectDefaultMetrics();
  }
}
