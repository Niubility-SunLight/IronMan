/*
 * @Author: your name
 * @Date: 2021-09-05 21:11:02
 * @LastEditTime: 2021-09-05 22:13:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\userRole\database\account.orm-entity.ts
 */
import { BaseOrmEntity } from 'src/base-framework/database/base.orm-entity';
import { AccountOrmEntity } from 'src/domains/account/database/account.orm-entity';
import { Entity, Column, ManyToOne } from 'typeorm';
@Entity('userRole')
export class UserRoleOrmEntity extends BaseOrmEntity {
  constructor(props?: UserRoleOrmEntity) {
    super(props);
  }

  @ManyToOne(
    (type) => AccountOrmEntity,
    (accountOrmEntity: AccountOrmEntity) => accountOrmEntity.userRoles,
  )
  account: AccountOrmEntity;

  @Column()
  roleType: string;

  @Column()
  nickName: string;

  @Column()
  realName: string;

  @Column()
  gender: string;

  @Column()
  avatarUrl: string;
}
