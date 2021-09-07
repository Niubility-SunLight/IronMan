/*
 * @Author: your name
 * @Date: 2021-09-07 22:14:23
 * @LastEditTime: 2021-09-07 22:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\login\case\getOpenId\getOpenId.service.ts
 */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export interface WeChatAuthCode {
  openid: string;
  session_key: string;
  unionid: string;
  errcode: number;
  errmsg: string;
}
@Injectable()
export class GetOpenIdService {
  constructor(private readonly httpService: HttpService) {}
  getOpenId(jscode: string): Observable<AxiosResponse<WeChatAuthCode>> {
    const weChatAuthCode = this.httpService.get<WeChatAuthCode>(
      `https://api.weixin.qq.com/sns/jscode2session?appid=wxb0658b12619f4c6e&secret=d7e6cf30bcd90c47b621591f2229c896&js_code=asdsaddddsdadadadasd&grant_type=authorization_code`,
    );
    return weChatAuthCode;
  }
}
