import { AccountOrmMapper } from './account.orm-mapper';
import { AccountEntity } from './../domain/account.entity';
import { AccountOrmEntity } from './account.orm-entity';
import { IAccountRepository } from './account.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseOrmRepository } from 'src/base-framework/database/base.orm-repository';

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
