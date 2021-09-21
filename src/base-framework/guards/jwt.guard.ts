/*
 * @Author: your name
 * @Date: 2021-09-18 16:28:26
 * @LastEditTime: 2021-09-19 16:29:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/guards/jwt.guard.ts
 */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(context: ExecutionContext) {
  //     console.log(super.canActivate(context));
  //     return super.canActivate(context);
  //   }

  handleRequest(err, user, info, context) {
    if (err || !user) {
      //   throw err || new UnauthorizedException();
      console.log(err);
    }
    const request = context.getRequest();
    console.log(request)
    console.log(context);
    return user;
  }
}
