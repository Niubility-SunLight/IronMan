/*
 * @Author: your name
 * @Date: 2021-09-18 15:58:21
 * @LastEditTime: 2021-09-22 17:21:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/guards/roles.guard.ts
 */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.includes(user.role);
  }

  // canActivate(context: ExecutionContext): boolean {
  //   const roles = this.reflector.get<string[]>('roles', context.getHandler());
  //   if (!roles) {
  //     return true;
  //   }
  //   //Get req
  //   const request = context.switchToHttp().getRequest();
  //   const user = request.user;
  //   if (user.role === AdminRoleEnum.GOD) {
  //     return true;
  //   }
  //   return user ? roles.includes(user.role) : false;
  // }
}
