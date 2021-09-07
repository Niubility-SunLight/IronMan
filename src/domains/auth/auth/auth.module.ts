/*
 * @Author: your name
 * @Date: 2021-09-07 17:09:36
 * @LastEditTime: 2021-09-07 17:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/auth/auth/auth.module.ts
 */
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: '123456',
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
