import { AccountProps } from './../models/account.entity';
/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-08-31 19:34:12
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
import {
  BaseOrmRepository,
  WhereCondition,
} from 'src/base-framework/database/base.orm-repository';
import { AccountEntity } from '../models/account.entity';
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { DeepPartial } from 'src/base-framework/types/deepPartial';

@Injectable()
export class AccountRepository
  extends BaseOrmRepository<AccountEntity, AccountProps, AccountOrmEntity>
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

  protected relations: string[];
  protected prepareQuery(
    params: DeepPartial<BaseEntityProps & AccountProps>,
  ): WhereCondition<AccountOrmEntity> {
    throw new Error('Method not implemented.');
  }

  async findOneById(id: string): Promise<AccountEntity> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw Error();
    }
    return this.mapper.toDomainEntity(account);
  }

  async exists(openId: string): Promise<boolean> {
    const found = await this.accountRepository.findOne(openId);
    if (found) {
      return true;
    }
    return false;
  }
}
