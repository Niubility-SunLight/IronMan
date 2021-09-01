/*
 * @Author: Liu Liang
 * @Date: 2021-07-19 22:15:53
 * @LastEditTime: 2021-09-01 22:22:05
 * @LastEditors: Please set LastEditors
 * @Description: ORM基础实体
 * @FilePath: \IronMan\src\base-framework\database\base.orm-entity.ts
 */
import {
  CreateDateColumn,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseOrmEntity {
  constructor(props?: unknown) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @PrimaryColumn({ type: 'int', update: false })
  id?: string;

  @Column({ type: 'tinyint' })
  isDelete!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt!: Date;
}
