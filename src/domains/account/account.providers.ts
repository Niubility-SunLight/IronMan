/*
 * @Author: your name
 * @Date: 2021-08-16 21:30:03
 * @LastEditTime: 2021-09-07 17:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.provider.ts
 */

import { Provider } from '@nestjs/common';
import { CreateAccountService } from './case/create-account/create-account.service';
import { AccountRepository } from './database/account.repository';
import { AuthService } from '../auth/auth.service';
export const createAccountSymbol = Symbol('createAccount');

export const createAccountProvider: Provider = {
  provide: createAccountSymbol,
  useFactory: (
    accountRepo: AccountRepository,
    service: AuthService,
  ): CreateAccountService => {
    return new CreateAccountService(accountRepo, service);
  },
  inject: [AccountRepository, AuthService],
};
