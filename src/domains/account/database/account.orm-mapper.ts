/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-09-05 22:31:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\database\account.orm-mapper.ts
 */
import { AccountOrmEntity } from './account.orm-entity';

import {
  BaseOrmMapper,
  OrmEntityProps,
} from 'src/base-framework/database/base.orm-mapper';
import { AccountEntity, AccountProps } from '../models/account.entity';

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
      userRoles: undefined
    };
    return ormProps;
  }
}
