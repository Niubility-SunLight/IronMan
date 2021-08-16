/*
 * @Author: your name
 * @Date: 2021-08-16 21:30:03
 * @LastEditTime: 2021-08-16 21:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.provider.ts
 */
import { Provider } from '@nestjs/common';
import { CreateAccountService } from './case/create-account/create-account.service';
import { AccountRepository } from './database/account.repository';


export const createAccountSymbol = Symbol('createAccount');

export const createAccountProvider: Provider = {
  provide: createAccountSymbol,
  useFactory: (accountRepo: AccountRepository): CreateAccountService => {
    return new CreateAccountService(accountRepo);
  },
  inject: [AccountRepository],
};
