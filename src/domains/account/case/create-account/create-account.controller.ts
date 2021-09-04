/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-09-04 21:29:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.controller.ts
 */
import { createAccountSymbol } from './../../account.providers';
import { Inject, Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { CreateAccountService } from './create-account.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateAccountRequest } from './create-account.request';
import { AccountResponse } from '../../models/account-response.entity';
@Controller()
export class CreateAccountHttpController {
  constructor(
    @Inject(createAccountSymbol)
    private readonly createAccount: CreateAccountService,
  ) {}

  @Post('test')
  @ApiOperation({ summary: '创建账号' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: AccountResponse,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: '账号已存在',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  async create(@Body() body: CreateAccountRequest): Promise<AccountResponse> {
    const params = new CreateAccountRequest(body);
    const account = await this.createAccount.createAccount(params);
    console.log(`This action returns all cats ${body}`);
    return account;
  }
}
