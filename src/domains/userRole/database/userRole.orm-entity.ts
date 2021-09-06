/*
 * @Author: your name
 * @Date: 2021-09-05 21:11:02
 * @LastEditTime: 2021-09-06 15:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\userRole\database\account.orm-entity.ts
 */
import { BaseOrmEntity } from 'src/base-framework/database/base.orm-entity';
import { AccountOrmEntity } from 'src/domains/account/database/account.orm-entity';
import { Entity, Column, ManyToOne, JoinColumn, RelationId } from 'typeorm';
@Entity('userRole')
export class UserRoleOrmEntity extends BaseOrmEntity {
  constructor(props?: UserRoleOrmEntity) {
    super(props);
  }

  @ManyToOne(
    (type) => AccountOrmEntity,
    (accountOrmEntity: AccountOrmEntity) => accountOrmEntity.userRoles,
  )
  // @JoinColumn()
  account?: AccountOrmEntity;

  @RelationId(
    (userRoleOrmEntity: UserRoleOrmEntity) => userRoleOrmEntity.account,
  )
  accountId: number;

  @Column()
  roleType: number;

  @Column({
    nullable: true,
  })
  nickName!: string;

  @Column({
    nullable: true,
  })
  realName!: string;

  @Column({
    nullable: true,
  })
  gender!: string;

  @Column({
    nullable: true,
  })
  avatarUrl!: string;
}
