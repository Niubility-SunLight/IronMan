import { AccountEntity } from './../domain/account.entity';
export interface IAccountRepository {
  findOneById(id: string): Promise<AccountEntity>;
}
