/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-08-16 22:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\database\account.repository.interface.ts
 */

import { AccountEntity } from '../models/account.entity';

export interface IAccountRepository {
  findOneById(id: string): Promise<AccountEntity>;
}
