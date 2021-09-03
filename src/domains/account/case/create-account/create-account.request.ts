/*
 * @Author: your name
 * @Date: 2021-09-03 16:33:20
 * @LastEditTime: 2021-09-03 17:13:55
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

export class CreateAccountRequest implements AccountProps {
  @ApiProperty({
    example: 'john@gmail.com',
    description: '微信openId',
  })
  @IsString()
  @IsNotEmpty()
  openId!: string;

  @ApiProperty({ example: 'France', description: '微信unionId' })
  @IsNotEmpty()
  @IsString()
  unionId!: string;

  @ApiProperty({ example: '1888888888', description: '手机号' })
  @IsMobilePhone('zh-CN')
  @IsNotEmpty()
  mobile!: string;

  @ApiProperty({ example: '12345678', description: '密码长度8-16' })
  @IsAlphanumeric()
  @IsNotEmpty()
  @Length(8, 16)
  password!: string;
}
