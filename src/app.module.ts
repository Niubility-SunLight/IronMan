/*
 * @Author: your name
 * @Date: 2021-07-20 21:38:55
 * @LastEditTime: 2021-09-18 17:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\app.module.ts
 */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database/index';
import { AccountModule } from './domains/account/account.module';
import { UserRoleModule } from './domains/userRole/userRole.module';
import { LoginModule } from './domains/login/login.module';
import { AuthModule } from './domains/auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AccountModule,
    UserRoleModule,
    AuthModule,
    LoginModule,
  ],

  controllers: [],
  // providers: [AppService],
})
export class AppModule {}
