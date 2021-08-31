/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-31 17:39:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.service.ts
 */
import { AccountEntity } from './../../models/account.entity';
import { IAccountRepository } from './../../database/account.repository.interface';

export class CreateAccountService {
  constructor(
    // no direct dependency on a repository, instead depends on a port
    private readonly accountRepo: IAccountRepository,
  ) {}

  async createUser(command: any): Promise<AccountEntity> {
    const account = new AccountEntity(command);
    return account;
    // user uniqueness any
    // if (await this.userRepo.exists(command.email.value)) {
    //   throw new ConflictException('User already exists');
    // }
    // const user = new UserEntity(command);
    // user.someBusinessLogic();
    // const created = await this.userRepo.save(user);
    // return created.id;
  }
}
