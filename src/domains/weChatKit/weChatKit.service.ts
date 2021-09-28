/*
 * @Author: your name
 * @Date: 2021-09-23 15:08:20
 * @LastEditTime: 2021-09-23 15:10:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/weChatKit/weChatKit.service.ts
 */

import { Injectable } from '@nestjs/common';
import crypto from 'crypto';
@Injectable()
export class WeChatKitService {
  static decryptData(sessionkey: string, encryptedData, iv) {
    // base64 decode
    const appId = 'adsdasdadadasdadasd';
    const sessionKey = Buffer.from(sessionkey, 'base64');
    encryptedData = Buffer.from(encryptedData, 'base64');
    iv = Buffer.from(iv, 'base64');
    let decoded;
    try {
      // 解密
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
      // 设置自动 padding 为 true，删除填充补位
      decipher.setAutoPadding(true);
      decoded = decipher.update(encryptedData, 'binary', 'utf8');
      decoded += decipher.final('utf8');
      decoded = JSON.parse(decoded);
    } catch (err) {
      throw new Error('Illegal Buffer');
    }
    if (decoded.watermark.appid !== appId) {
      throw new Error('Illegal Buffer');
    }
    return decoded;
  }
}
