import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);

export const OpenTelemetryConfig = new NodeSDK({
  serviceName: 'Tetse',
  traceExporter: new OTLPTraceExporter({
    url: 'http://otel-collector:4317',
    compression: 'gzip' as any,
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  instrumentations: [
    getNodeAutoInstrumentations(),
    // new NestInstrumentation(),
    // new HttpInstrumentation(),
    // new ExpressInstrumentation(),
  ],
});

process.on('SIGTERM', () => {
  OpenTelemetryConfig.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
