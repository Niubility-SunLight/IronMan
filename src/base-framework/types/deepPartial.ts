/*
 * @Author: your name
 * @Date: 2021-08-31 16:08:16
 * @LastEditTime: 2021-08-31 16:22:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/types/deepPartial.ts
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
