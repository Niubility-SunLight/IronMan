/*
 * @Author: your name
 * @Date: 2021-09-04 23:15:59
 * @LastEditTime: 2021-09-05 21:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\exceptions\base.exception.ts
 */

import { Exceptions } from './exception.types';

export abstract class BaseException extends Error {
//   constructor(readonly message: string, readonly metadata?: ObjectLiteral) {
//     super(message);
//     Error.captureStackTrace(this, this.constructor);
//   }

//   abstract name: Exceptions;

//   toJSON(): SerializedException {
//     return {
//       name: this.name,
//       message: this.message,
//       stack: this.stack,
//       metadata: this.metadata,
//     };
//   }
}
