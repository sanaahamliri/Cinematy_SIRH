import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as keycloakConnect from 'keycloak-connect';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const keycloak = new keycloakConnect({});
  app.use(keycloak.middleware());
  await app.listen(3000);
}
bootstrap();
