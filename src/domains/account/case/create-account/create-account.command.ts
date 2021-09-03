/*
 * @Author: your name
 * @Date: 2021-09-03 17:14:42
 * @LastEditTime: 2021-09-03 17:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.command.ts
 */
import { AccountProps } from './../../models/account.entity';

export class CreateAccountCommand {
  openId: string;
  unionId: string;
  mobile: string;
  password: string;
  constructor(props: AccountProps) {
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.mobile = props.mobile;
    this.password = props.password;
  }
}
