import { Controller, Get } from '@nestjs/common';
import { IdentityService } from '../../service/user.service';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}
  @Get()
  findByFilter() {
    return this.identityService.findByFilter();
  }

  @Get('test')
  findBytesteFilter() {
    return this.identityService.findByFilter();
  }
}
