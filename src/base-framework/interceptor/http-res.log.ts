/*
 * @Author: your name
 * @Date: 2021-09-22 21:26:49
 * @LastEditTime: 2021-09-23 13:53:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\intercepter\http-res.lo.ts
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpReqLogs implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    throw new Error('Method not implemented.');
  }
}
