import { UserRoleOrmEntity } from 'src/domains/userRole/database/userRole.orm-entity';
import { UserRoleOrmMapper } from './../../userRole/database/userRole.orm-mapper';
/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-09-06 13:57:51
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
import { UserRoleEntity } from 'src/domains/userRole/models/userRole.entity';

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
      userRoles: ormEntity.userRoles.map((v: UserRoleOrmEntity) =>
        new UserRoleOrmMapper(UserRoleEntity, UserRoleOrmEntity).toDomainEntity(
          v,
        ),
      ),
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
      userRoles: entity.userRoles.map((v: UserRoleEntity) =>
        new UserRoleOrmMapper(UserRoleEntity, UserRoleOrmEntity).toOrmEntity(v),
      ),
    };
    return ormProps;
  }
}
