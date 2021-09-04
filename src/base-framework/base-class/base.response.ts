/*
 * @Author: your name
 * @Date: 2021-09-04 20:54:30
 * @LastEditTime: 2021-09-04 21:16:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\base-class\base.response.ts
 */
import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { ApiProperty } from '@nestjs/swagger';
export abstract class BaseResponseEntity {
  constructor(props: BaseEntityProps) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.isDelete = props.isDelete;
    this.deletedAt = props.deletedAt;
  }

  @ApiProperty({
    example: '1',
    description: '业务Id',
  })
  id: number;
  @ApiProperty({
    example: '2021-09-14 13:55:55:55',
    description: '创建时间',
  })
  createdAt: string;
  @ApiProperty({
    example: '2021-09-14 13:55:55:55',
    description: '最后修改时间',
  })
  updatedAt: string;
  @ApiProperty({
    example: '2021-09-14 13:55:55:55',
    description: '最后修改时间',
  })
  isDelete: boolean;
  @ApiProperty({
    example: '2021-09-14 13:55:55:55',
    description: '删除时间',
  })
  deletedAt: string;
}
