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
    (type) => UserRoleOrmEntity,
    (userRoleOrmEntity: UserRoleOrmEntity) => userRoleOrmEntity.account,
  ) // note: we will create author property in the Photo class below
  userRoles: UserRoleOrmEntity[];
}
