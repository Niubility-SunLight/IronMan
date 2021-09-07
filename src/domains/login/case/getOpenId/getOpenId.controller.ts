/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-09-07 20:28:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.controller.ts
 */

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { getOpenIdSymbol } from '../../login.providers';
import { GetOpenIdService } from './getOpenId.service';

@Controller()
export class GetOpenIdHttpController {
  constructor(
    @Inject(getOpenIdSymbol)
    private readonly service: GetOpenIdService,
  ) {}

  @Get('getOpenId')
  @ApiOperation({ summary: '获取微信OpenId' })
  @ApiResponse({
    status: HttpStatus.OK,
    // type: AccountResponse,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: '账号已存在',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  async create(@Query('jscode') jscode: string): Promise<any> {
    // const params = new GetOpenIdRequest(body);
    const account = await this.service.getOpenId(jscode);
    console.log(`This action returns all cats ${jscode}`);
    return account;
  }
}
