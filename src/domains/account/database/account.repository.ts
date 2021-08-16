/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-08-16 22:01:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\database\account.repository.ts
 */
import { AccountOrmMapper } from './account.orm-mapper';
import { AccountOrmEntity } from './account.orm-entity';
import { IAccountRepository } from './account.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseOrmRepository } from 'src/base-framework/database/base.orm-repository';
import { AccountEntity } from '../models/account.entity';

@Injectable()
export class AccountRepository
  extends BaseOrmRepository<AccountEntity, AccountOrmEntity>
  implements IAccountRepository
{
  constructor(
    @InjectRepository(AccountOrmEntity)
    private readonly accountRepository: Repository<AccountOrmEntity>,
  ) {
    super(
      accountRepository,
      new AccountOrmMapper(AccountEntity, AccountOrmEntity),
    );
  }

  async findOneById(id: string): Promise<AccountEntity> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw Error();
    }
    return this.mapper.toDomainEntity(account);
  }
}
