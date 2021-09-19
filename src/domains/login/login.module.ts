/*
 * @Author: your name
 * @Date: 2021-09-07 22:14:23
 * @LastEditTime: 2021-09-14 22:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\login\login.module.ts
 */
import { GetOpenIdHttpController } from './case/getOpenId/getOpenId.controller';
import { GetOpenIdService } from './case/getOpenId/getOpenId.service';
import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { getOpenIdProvider } from './login.providers';

@Module({
  imports: [HttpModule],
  controllers: [GetOpenIdHttpController],
  providers: [GetOpenIdService, getOpenIdProvider],
})
export class LoginModule {}
