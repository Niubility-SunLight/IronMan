/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-30 17:09:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/base-class/aggregate-root.ts
 */
import { BaseDomainEntity } from './base.entity';
import { DomainEvent } from '../domain-events/domain-event';
import { DomainEvents } from '../domain-events/domain-events';

export abstract class AggregateRoot<
  EntityProps,
> extends BaseDomainEntity<EntityProps> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
    DomainEvents.prepareForPublish(this);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }
}
