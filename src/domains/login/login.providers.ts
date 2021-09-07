/*
 * @Author: your name
 * @Date: 2021-08-16 21:30:03
 * @LastEditTime: 2021-09-07 20:27:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.provider.ts
 */

import { HttpService } from '@nestjs/axios';
import { Provider } from '@nestjs/common';
import { GetOpenIdService } from './case/getOpenId/getOpenId.service';
export const getOpenIdSymbol = Symbol('getOpenId');

export const getOpenIdProvider: Provider = {
  provide: getOpenIdSymbol,
  useFactory: (httpServer: HttpService): GetOpenIdService => {
    return new GetOpenIdService(httpServer);
  },
  inject: [HttpService],
};
