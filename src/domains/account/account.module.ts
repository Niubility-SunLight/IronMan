/*
 * @Author: your name
 * @Date: 2021-08-16 21:11:58
 * @LastEditTime: 2021-09-07 17:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.module.ts
 */

import { AccountOrmEntity } from './database/account.orm-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { createAccountProvider } from './account.providers';
import { CreateAccountHttpController } from './case/create-account/create-account.controller';
import { AccountRepository } from './database/account.repository';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity])],
  controllers: [CreateAccountHttpController],
  providers: [AccountRepository, createAccountProvider],
})
export class AccountModule {}
