/*
 * @Author: your name
 * @Date: 2021-09-13 21:35:04
 * @LastEditTime: 2021-09-13 21:39:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\login\models\openId.entity.ts
 */
/*
 * @Author: your name
 * @Date: 2021-09-03 15:26:33
 * @LastEditTime: 2021-09-07 16:21:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/case/create-account/create-account.responst.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class OpenIdResponse {
  constructor(props) {
    this.openId = props.openId;
    this.unionId = props.unionId;
    this.errcode = props.errcode;
    this.errmsg = props.errmsg;
  }

  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '用户唯一标识',
  })
  openId: string;
  @ApiProperty({
    example: 'oAhVW4yadPuAFvU1LEB1J9MFbyDg',
    description: '用户在开放平台的唯一标识符',
  })
  unionId: string;
  @ApiProperty({
    example: '-1',
    description: '错误码',
  })
  errcode: string;

  @ApiProperty({
    description: 'code 无效',
  })
  errmsg: string;
}
