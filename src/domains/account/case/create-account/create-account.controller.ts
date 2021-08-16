/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-08-16 22:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.controller.ts
 */
import { createAccountSymbol } from './../../account.providers';
import { Inject, Controller, Get } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
@Controller()
export class CreateAccountHttpController {
  constructor(
    @Inject(createAccountSymbol)
    private readonly createAccount: CreateAccountService,
  ) {}

  @Get('test')
  findAll(): string {
    return 'This action returns all cats';
  }
}
