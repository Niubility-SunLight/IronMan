/*
 * @Author: your name
 * @Date: 2021-08-16 21:30:03
 * @LastEditTime: 2021-09-06 16:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.provider.ts
 */
import { UserRoleRepository } from './../userRole/database/userRole.repository';
import { Provider } from '@nestjs/common';
import { CreateAccountService } from './case/create-account/create-account.service';
import { AccountRepository } from './database/account.repository';

export const createAccountSymbol = Symbol('createAccount');

export const createAccountProvider: Provider = {
  provide: createAccountSymbol,
  useFactory: (
    accountRepo: AccountRepository,
    userRoleRepo: UserRoleRepository,
  ): CreateAccountService => {
    return new CreateAccountService(accountRepo, userRoleRepo);
  },
  // inject: [AccountRepository, UserRoleRepository],
};
