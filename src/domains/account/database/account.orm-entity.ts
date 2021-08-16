import { BaseOrmEntity } from 'src/base-framework/database/base.orm-entity';
import { Entity, Column } from 'typeorm';
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
}
