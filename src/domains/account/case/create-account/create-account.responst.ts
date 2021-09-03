import { AccountEntity } from './../../models/account.entity';
/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-03 17:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { AccountProps } from './../../models/account.entity';
import { ApiProperty } from '@nestjs/swagger';
type Account = AccountProps & BaseEntityProps;

export class AccountResponse implements Account {
  public id: number;
  public openId: string;
  public unionId: string;
  public mobile: string;
  public password: string;
  public createdAt: string;
  public updatedAt: string;
  public isDelete: boolean;
  public deletedAt: string;
  constructor(props: AccountEntity) {
    this.id = props.id;
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.mobile = props.mobile;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isDelete = props.isDelete;
    this.deletedAt = props.deletedAt;
  }

  @ApiProperty({
    example: 'joh-doe@gmail.com',
    description: "User's email address",
  })
  email: string;

  @ApiProperty({
    example: 'France',
    description: "User's country of residence",
  })
  country: string;

  @ApiProperty({
    example: '123456',
    description: 'Postal code',
  })
  postalCode: string;

  @ApiProperty({
    example: 'Park Avenue',
    description: 'Street where the user is registered',
  })
  street: string;
}
