/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-09-01 23:10:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/base-class/base.entity.ts
 */
import { DateVo } from '../value-objects/date.value-object';
export interface BaseEntityProps {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  isDelete: boolean;
  deletedAt?: string;
}

export abstract class BaseDomainEntity<BaseDomainEntityProps> {
  protected readonly props: BaseDomainEntityProps;
  private readonly _id: number;
  private readonly _createdAt: string;
  private _updatedAt: string;
  private _isDelete: boolean;
  private _deletedAt: string;
  constructor(props: BaseDomainEntityProps) {
    const now = DateVo.now();
    console.log(now)
    this._id = 1;
    this._createdAt = now;
    this._updatedAt = now;
    this._deletedAt = now;
    this._isDelete = false;
    this.props = props;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  get isDelete(): boolean {
    return this._isDelete;
  }

  get deletedAt(): string {
    return this._deletedAt;
  }
}
