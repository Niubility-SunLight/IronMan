/*
 * @Author: your name
 * @Date: 2021-09-06 09:40:59
 * @LastEditTime: 2021-09-06 17:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/database/account.orm-entity.ts
 */
import { BaseOrmEntity } from 'src/base-framework/database/base.orm-entity';
import { UserRoleOrmEntity } from 'src/domains/userRole/database/userRole.orm-entity';
import { Entity, Column, OneToMany } from 'typeorm';
@Entity('account')
export class AccountOrmEntity extends BaseOrmEntity {
  constructor(props?: AccountOrmEntity) {
    super(props);
  }

  @Column()
  openId: string;

  @Column()
  unionId: string;

  @Column()
  mobile: string;

  @Column()
  password: string;

  @OneToMany(
    () => UserRoleOrmEntity,
    (userRoleOrmEntity: UserRoleOrmEntity) => userRoleOrmEntity.account,
    {
      cascade: true,
    },
  ) // note: we will create author property in the Photo class below
  userRoles: UserRoleOrmEntity[];
}
