import { Controller, Get } from '@nestjs/common';
import { IdentityService } from '../../service/identity.service';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}
  @Get()
  findByFilter() {
    return this.identityService.findByFilter();
  }
}
