import { Module } from '@nestjs/common';
import { IdentityController } from './controller/user/identity.controller';
import { IdentityService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/database/entities/user.entity';
import { IdentityDatabaseModule } from './infra/database/config/database.provider';
import {
  UserInterfaceToken,
  UserRepositoryImpl,
} from './repository/user/user.repository';

@Module({
  imports: [IdentityDatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [IdentityController],
  providers: [
    IdentityService,
    {
      provide: UserInterfaceToken,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class IdentityModule {}
