/*
 * @Author: your name
 * @Date: 2021-08-16 21:11:58
 * @LastEditTime: 2021-09-05 22:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.module.ts
 */

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// import { createAccountProvider } from './userRole.providers';
import { UserRoleOrmEntity } from './database/userRole.orm-entity';
import { UserRoleRepository } from './database/userRole.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleOrmEntity])],
  // controllers: [CreateUserRoleHttpController],
  // providers: [UserRoleRepository],
})
export class UserRoleModule {}