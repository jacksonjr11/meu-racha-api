import { Inject, Injectable } from '@nestjs/common';
import {
  UserInterfaceToken,
  UserRepository,
} from '../repository/user/user.repository';

@Injectable()
export class IdentityService {
  constructor(
    @Inject(UserInterfaceToken)
    private readonly userRepository: UserRepository,
  ) {}

  public async findByFilter() {
    return await this.userRepository.findAll();
  }
}
