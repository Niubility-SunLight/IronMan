/*
 * @Author: your name
 * @Date: 2021-09-03 16:33:20
 * @LastEditTime: 2021-09-04 23:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.command.ts
 */
import { ApiProperty } from '@nestjs/swagger';
import { AccountProps } from '../../models/account.entity';
import {
  IsNotEmpty,
  IsAlphanumeric,
  Length,
  IsString,
  IsMobilePhone,
} from 'class-validator';
import { BaseRequestEntity } from 'src/base-framework/base-class/base.request';

export class CreateAccountRequest
  extends BaseRequestEntity
  implements AccountProps
{
  constructor(props: AccountProps) {
    super();
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.mobile = props.mobile;
    this.password = props.password;
    this.validate();
  }
  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '微信openId',
  })
  @IsString()
  @IsNotEmpty()
  openId!: string;

  @ApiProperty({
    example: 'onbyK1fic_5zyOo4huhZrP6cyXCQ',
    description: '微信unionId',
  })
  @IsNotEmpty()
  @IsString()
  unionId!: string;

  @ApiProperty({ example: '18736626000', description: '手机号' })
  @IsMobilePhone('zh-CN')
  @IsNotEmpty()
  mobile!: string;

  @ApiProperty({ example: '12345678', description: '密码长度8-16' })
  @IsAlphanumeric()
  @IsNotEmpty()
  @Length(8, 16)
  password!: string;
}
