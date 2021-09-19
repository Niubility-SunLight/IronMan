/*
 * @Author: your name
 * @Date: 2021-07-20 21:38:55
<<<<<<< HEAD
 * @LastEditTime: 2021-09-19 09:53:12
=======
 * @LastEditTime: 2021-09-18 17:34:47
>>>>>>> 94c5740d2770d7f90af9fe056db8be173a5260b1
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
    HttpModule,
    AccountModule,
    UserRoleModule,
    AuthModule,
    LoginModule,
  ],

  controllers: [],
})
export class AppModule {}
