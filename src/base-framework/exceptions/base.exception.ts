/*
 * @Author: your name
 * @Date: 2021-09-04 23:15:59
 * @LastEditTime: 2021-09-13 21:27:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\exceptions\base.exception.ts
 */

import { ObjectLiteral } from '../types/object-literal.type';
import { Exceptions } from './exception.types';
export interface SerializedException {
  name: string;
  message: string;
  stack?: string;
  metadata?: ObjectLiteral;
}
export abstract class BaseException extends Error {
  constructor(readonly message: string, readonly metadata?: ObjectLiteral) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  abstract name: Exceptions;

  toJSON(): SerializedException {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      metadata: this.metadata,
    };
  }
}
