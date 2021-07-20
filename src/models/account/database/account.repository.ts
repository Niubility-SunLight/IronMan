import { AccountEntity } from './../domain/account.entity';
import { AccountOrmEntity } from './account.orm-entity';
import { IAccountRepository } from './account.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(
    @InjectRepository(AccountOrmEntity)
    private readonly accountRepository: Repository<AccountOrmEntity>,
  ) {}

  async findOneById(id: string): Promise<AccountEntity> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw Error();
    }
    return;
  }
}
