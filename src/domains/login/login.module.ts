/*
 * @Author: your name
 * @Date: 2021-09-07 19:35:30
 * @LastEditTime: 2021-09-18 17:32:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/login/login.module.ts
 */
import { GetOpenIdHttpController } from './case/getOpenId/getOpenId.controller';
import { GetOpenIdService } from './case/getOpenId/getOpenId.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { getOpenIdProvider } from './login.providers';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [GetOpenIdHttpController],
  providers: [GetOpenIdService, getOpenIdProvider],
})
export class LoginModule {}
