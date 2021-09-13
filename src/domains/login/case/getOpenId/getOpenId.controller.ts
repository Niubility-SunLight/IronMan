/*
 * @Author: your name
 * @Date: 2021-08-16 21:32:33
 * @LastEditTime: 2021-09-13 21:38:38
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
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { getOpenIdSymbol } from '../../login.providers';
import { GetOpenIdService, WeChatAuthCode } from './getOpenId.service';
import { OpenIdResponse } from '../../models/openId-response.entity';

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
    type: OpenIdResponse,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  create(@Query('jscode') jscode: string) {
    const account = this.service.getOpenId(jscode);
    return account;
  }
}
