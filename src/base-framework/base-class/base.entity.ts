/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-30 17:19:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/base-class/base.entity.ts
 */
import { DateVo } from '../value-objects/date.value-object';
export interface BaseEntityProps {
  id?: number;
  createdAt?: DateVo;
  updatedAt?: DateVo;
  isDelete: boolean;
  deletedAt?: DateVo;
}

export abstract class BaseDomainEntity<BaseDomainEntityProps> {
  protected readonly props: BaseDomainEntityProps;
  private readonly _id: number;
  private readonly _createdAt: DateVo;
  private _updatedAt: DateVo;
  private _isDelete: boolean;
  private _deletedAt: DateVo;
  constructor(props: BaseDomainEntityProps) {
    const now = DateVo.now();
    this._id = 1;
    this._createdAt = now;
    this._updatedAt = now;
    this._isDelete = false;
    this.props = props;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): DateVo {
    return this._createdAt;
  }

  get updatedAt(): DateVo {
    return this._updatedAt;
  }

  get isDelete(): boolean {
    return this._isDelete;
  }

  get deletedAt(): DateVo {
    return this._deletedAt;
  }
}
