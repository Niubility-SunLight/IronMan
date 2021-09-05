/*
 * @Author: your name
 * @Date: 2021-07-20 21:38:55
 * @LastEditTime: 2021-09-05 22:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database/index';
import { AccountModule } from './domains/account/account.module';
import { UserRoleModule } from './domains/userRole/userRole.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AccountModule,
    UserRoleModule,
  ],

  controllers: [],
  // providers: [AppService],
})
export class AppModule {}
