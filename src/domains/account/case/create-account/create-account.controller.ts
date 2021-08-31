/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-08-31 22:17:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.controller.ts
 */
import { createAccountSymbol } from './../../account.providers';
import { Inject, Controller, Post, Body } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
@Controller()
export class CreateAccountHttpController {
  constructor(
    @Inject(createAccountSymbol)
    private readonly createAccount: CreateAccountService,
  ) {}

  @Post('test')
  create(@Body() body: any): string {
    console.log(body);
    return `This action returns all cats ${body}`;
  }
}
