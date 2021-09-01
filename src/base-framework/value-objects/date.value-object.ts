import { BaseValueObject } from '../base-class/base.value-object';
import dayjs from 'dayjs';
export class DateVo extends BaseValueObject<Date> {
  constructor(value: Date | string | number) {
    const date = new Date(value);
    super({ value: date });
  }

  public get value(): Date {
    return this.props.value;
  }

  public static now(): string {
    // return new DateVo(Date.now());
    // return dayjs().format('YYYY-MM-DD');
    return '2021-09-01 12:00:00'
    // return new DateVo(dayjs().format('YYYY-MM-DD'));
  }
}
