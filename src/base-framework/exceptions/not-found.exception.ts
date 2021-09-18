/*
 * @Author: your name
 * @Date: 2021-09-18 15:43:25
 * @LastEditTime: 2021-09-18 15:43:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/exceptions/not-found.exception.ts
 */
import { BaseException } from './base.exception';
import { Exceptions } from './exception.types';

export class NotFoundException extends BaseException {
  constructor(readonly message: string = 'Not found') {
    super(message);
  }

  readonly name = Exceptions.notFound;
}
