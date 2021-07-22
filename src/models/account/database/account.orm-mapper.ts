import { AccountOrmEntity } from './account.orm-entity';
import { AccountEntity, AccountProps } from './../domain/account.entity';
import {
  BaseOrmMapper,
  OrmEntityProps,
} from 'src/base-framework/database/base.orm-mapper';

export class AccountOrmMapper extends BaseOrmMapper<
  AccountEntity,
  AccountOrmEntity
> {
  protected toDomainProps(ormEntity: AccountOrmEntity): AccountProps {
    const props: AccountProps = {
      openId: ormEntity.openId,
      unionId: ormEntity.unionId,
      mobile: ormEntity.mobile,
      password: ormEntity.password,
    };
    return props;
  }
  protected toOrmProps(
    entity: AccountEntity,
  ): OrmEntityProps<AccountOrmEntity> {
    const ormProps: OrmEntityProps<AccountOrmEntity> = {
      openId: entity.openId,
      unionId: entity.unionId,
      mobile: entity.mobile,
      password: entity.password,
    };
    return ormProps;
  }
}
