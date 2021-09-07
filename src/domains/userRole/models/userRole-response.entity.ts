/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-07 15:52:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BaseResponseEntity } from 'src/base-framework/base-class/base.response';
import { UserRoleProps } from './userRole.entity';
import { UserRoleEntity } from 'src/domains/userRole/models/userRole.entity';

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
    example: '1',
    description: '所属账户Id',
  })
  accountId: number;

  @ApiProperty({
    example: '1',
    description: '角色类型',
  })
  roleType: number;
  @ApiProperty({
    example: '法外狂徒',
    description: '角色昵称',
  })
  nickName: string;
  @ApiProperty({
    example: '李四',
    description: '角色真实姓名',
  })
  realName: string;
  @ApiProperty({
    example: '男',
    description: '性别',
  })
  gender: string;
  @ApiProperty({
    example:
      'https://iph.href.lu/400x400?text=%E6%B5%8B%E8%AF%95%E7%85%A7%E7%89%87&fg=f44336&bg=f1c232',
    description: '角色图片',
  })
  avatarUrl: string;
}
