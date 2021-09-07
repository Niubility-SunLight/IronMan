/*
 * @Author: your name
 * @Date: 2021-09-07 18:42:03
 * @LastEditTime: 2021-09-07 19:28:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/config/axios/axios.module.ts
 */
import { HttpModule } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
@Global()
@Module({
  imports: [HttpModule],
//   providers:[]
})
export class AxiosModule {}
