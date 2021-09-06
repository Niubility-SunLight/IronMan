import { UserRoleEntity } from 'src/domains/userRole/models/userRole.entity';
/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-06 13:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseEntity } from 'src/base-framework/base-class/base.response';
import { UserRoleProps } from './userRole.entity';

type UserRole = UserRoleProps & BaseEntityProps;

export class UserRoleResponse extends BaseResponseEntity implements UserRole {
  constructor(props: UserRoleEntity) {
    super(props);
    this.accountId = props.accountId;
    this.roleType = props.roleType;
    this.nickName = props.nickName;
    this.realName = props.realName;
    this.gender = props.gender;
    this.avatarUrl = props.avatarUrl;
  }

  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信openId',
  })
  accountId: number;

  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信openId',
  })
  roleType: number;
  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信unionId',
  })
  nickName: string;
  @ApiProperty({
    example: '18841126869',
    description: '用户手机号',
  })
  realName: string;
  @ApiProperty({
    example: '18841126869',
    description: '用户手机号',
  })
  gender: string;
  @ApiProperty({
    example: '18841126869',
    description: '用户手机号',
  })
  avatarUrl: string;
}
