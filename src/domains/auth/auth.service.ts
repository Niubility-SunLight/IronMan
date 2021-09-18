/*
 * @Author: your name
 * @Date: 2021-09-07 17:09:14
 * @LastEditTime: 2021-09-07 17:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/auth/auth/auth.service.ts
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
