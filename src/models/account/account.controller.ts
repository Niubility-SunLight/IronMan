import { Controller, Get } from '@nestjs/common';
@Controller()
export class AccountController {
  @Get('/get')
  findAll(): string {
    return 'This action returns all cats';
  }
}
