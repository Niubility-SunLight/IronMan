/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-04 21:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseEntity } from 'src/base-framework/base-class/base.response';
import { AccountEntity, AccountProps } from './account.entity';

type Account = Omit<AccountProps & BaseEntityProps, 'password'>;

export class AccountResponse extends BaseResponseEntity implements Account {
  constructor(props: AccountEntity) {
    super(props);
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.mobile = props.mobile;
  }

  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信openId',
  })
  openId: string;
  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信unionId',
  })
  unionId: string;
  @ApiProperty({
    example: '18841126869',
    description: '用户手机号',
  })
  mobile: string;
}
