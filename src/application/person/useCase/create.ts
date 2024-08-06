import { Inject } from '@nestjs/common';
import { UserRepository, UserRepositoryInterfaceToken } from '../repository/user.repository';

export class FindUserUseCase {
  constructor(
    @Inject(UserRepositoryInterfaceToken)
    private userRepository: UserRepository
  ) { }

  async execute(): Promise<any> {
    return await this.userRepository.findAll();
  }
}
