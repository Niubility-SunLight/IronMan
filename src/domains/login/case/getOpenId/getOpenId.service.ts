import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetOpenIdService {
  constructor(private readonly httpService: HttpService) {}
  async getOpenId(jscode: string): Promise<any> {
    const weChatAuthCode = await this.httpService.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=wxb0658b12619f4c6e&secret=d7e6cf30bcd90c47b621591f2229c896&js_code=asdsaddddsdadadadasd&grant_type=authorization_code`,
    );
    return weChatAuthCode;
  }
}
