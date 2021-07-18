import { isEqual } from 'lodash';

export type Primitives = string | number | boolean;
export interface DomainPrimitive<T extends Primitives | Date> {
  value: T;
}

type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T;

export abstract class BaseValueObject<T> {
  protected readonly props: ValueObjectProps<T>;
  constructor(props: ValueObjectProps<T>) {}

  public equals(vo?: ValueObjectProps<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return isEqual(this, vo);
  }
  public checkIsEmpty(props: ValueObjectProps<T>): void {}
}
