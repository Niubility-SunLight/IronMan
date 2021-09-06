/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-09-06 20:21:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.service.ts
 */
import { AccountEntity } from './../../models/account.entity';
import { IAccountRepository } from './../../database/account.repository.interface';
import { AccountResponse } from '../../models/account-response.entity';
import { IUserRoleRepository } from 'src/domains/userRole/database/userRole.repository.interface';
import { UserRoleEntity } from 'src/domains/userRole/models/userRole.entity';

export class CreateAccountService {
  constructor(
    // no direct dependency on a repository, instead depends on a port
    private readonly accountRepo: IAccountRepository,
  ) {}

  async createAccount(command: any): Promise<AccountResponse> {
    const account = new AccountEntity(command);
    const student = new UserRoleEntity({ roleType: 1 });
    const teacher = new UserRoleEntity({ roleType: 2 });
    account.userRoles = [student, teacher];
    const created = await this.accountRepo.save(account);
    return new AccountResponse(created);
  }
}
