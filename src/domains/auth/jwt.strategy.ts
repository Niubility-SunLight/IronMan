/*
 * @Author: your name
 * @Date: 2021-09-18 17:00:28
 * @LastEditTime: 2021-09-22 16:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/auth/jwt.strategy.ts
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
      ignoreExpiration: false,
      secretOrKey: '123456',
    });
  }
  async validate(payload: any) {
    console.log('payload', payload);
    return { ...payload };
  }
}
