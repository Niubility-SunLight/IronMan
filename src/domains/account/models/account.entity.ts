/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-30 17:14:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/models/account.entity.ts
 */
import { AggregateRoot } from 'src/base-framework/base-class/aggregate-root';
export interface AccountProps {
  openId: string;
  unionId: string;
  mobile: string;
  password: string;
}
export class AccountEntity extends AggregateRoot<AccountProps> {
  constructor(props: AccountProps) {
    super(props);
  }

  get openId(): string {
    return this.props.openId;
  }
  get unionId(): string {
    return this.props.unionId;
  }
  get mobile(): string {
    return this.props.mobile;
  }
  get password(): string {
    return this.props.password;
  }
}
