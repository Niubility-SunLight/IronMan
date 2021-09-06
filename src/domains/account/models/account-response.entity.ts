import { UserRoleEntity } from './../../userRole/models/userRole.entity';
import { UserRoleResponse } from './../../userRole/models/account-response.entity';
/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-06 17:55:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseEntity } from 'src/base-framework/base-class/base.response';
import { AccountEntity, AccountProps } from './account.entity';

type Account = Omit<AccountProps & BaseEntityProps, 'password'>;

export class AccountResponse extends BaseResponseEntity {
  constructor(props: AccountEntity) {
    super(props);
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.mobile = props.mobile;
    this.userRoles = props.userRoles.map(
      (v: UserRoleEntity) => new UserRoleResponse(v),
    );
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

  @ApiProperty({
    example: '账户角色',
    type: UserRoleResponse,
    description: '用户手机号',
  })
  userRoles: UserRoleResponse[];
}
