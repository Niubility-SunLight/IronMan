/*
 * @Author: your name
 * @Date: 2021-09-04 20:54:30
 * @LastEditTime: 2021-09-06 18:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\base-class\base.response.ts
 */

import { validate } from 'class-validator';
export abstract class BaseRequestEntity {
  protected validate() {
    validate(this).then((errors) => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
      } else {
        console.log('\x1b[33m%s\x1b[0m', 'validation succeed');
      }
    });
  }
}
