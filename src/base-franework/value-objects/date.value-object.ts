import { BaseValueObject } from '../domain/base.value-object';
import dayjs from 'dayjs';
export class DateVo extends BaseValueObject<Date> {
  constructor(value: Date | string | number) {
    const date = new Date(value);
    super({ value: date });
  }

  public static now(): DateVo {
    return new DateVo(Date.now());
  }
}
