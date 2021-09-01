/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-09-01 23:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.controller.ts
 */
import { AccountEntity } from './../../models/account.entity';
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
  async create(@Body() body: any): Promise<AccountEntity> {
    const account = await this.createAccount.createAccount(body);
    console.log(`This action returns all cats ${body}`);
    return account;
  }
}
