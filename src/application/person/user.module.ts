import { Module } from '@nestjs/common';
import { FindUserUseCase } from './useCase/create';
import UserRepositoryImpl, { UserRepositoryInterfaceToken } from './repository/user.repository';

@Module({
  providers: [FindUserUseCase,
    {
      provide: UserRepositoryInterfaceToken,
      useClass: UserRepositoryImpl
    }
  ],
})
export class UserModule { }
