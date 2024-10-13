import { Module } from '@nestjs/common';
import { IdentityController } from './controller/user/identity.controller';
import { IdentityService } from './service/identity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/database/entities/user.entity';
import { IdentityDatabaseModule } from './infra/database/config/database.provider';

@Module({
  imports: [IdentityDatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [IdentityController],
  providers: [IdentityService],
})
export class IdentityModule {}
