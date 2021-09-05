/*
 * @Author: your name
 * @Date: 2021-09-05 21:11:02
 * @LastEditTime: 2021-09-05 22:25:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\userRole\database\account.orm-mapper.ts
 */
/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-09-03 12:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\database\account.orm-mapper.ts
 */

import {
  BaseOrmMapper,
  OrmEntityProps,
} from 'src/base-framework/database/base.orm-mapper';
import { UserRoleEntity, UserRoleProps } from '../models/userRole.entity';
import { UserRoleOrmEntity } from './userRole.orm-entity';

export class UserRoleOrmMapper extends BaseOrmMapper<
  UserRoleEntity,
  UserRoleOrmEntity
> {
  protected toDomainProps(ormEntity: UserRoleOrmEntity): UserRoleProps {
    const props: UserRoleProps = {
      roleType: ormEntity.roleType,
      nickName: ormEntity.nickName,
      realName: ormEntity.realName,
      gender: ormEntity.gender,
      avatarUrl: ormEntity.avatarUrl,
    };
    return props;
  }
  protected toOrmProps(
    entity: UserRoleEntity,
  ): OrmEntityProps<UserRoleOrmEntity> {
    const ormProps: OrmEntityProps<UserRoleOrmEntity> = {
      roleType: entity.roleType,
      nickName: entity.nickName,
      realName: entity.realName,
      gender: entity.gender,
      avatarUrl: entity.avatarUrl,
      account: undefined,
    };
    return ormProps;
  }
}
