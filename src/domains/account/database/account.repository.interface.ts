/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-31 19:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/database/account.repository.interface.ts
 */
import { AccountEntity, AccountProps } from './../models/account.entity';
import { RepositoryPort } from './../../../base-framework/ports/repository.ports';

export interface IAccountRepository
  extends RepositoryPort<AccountEntity, AccountProps> {
  findOneById(id: string): Promise<AccountEntity>;
  exists(openId: string): Promise<boolean>;
}
