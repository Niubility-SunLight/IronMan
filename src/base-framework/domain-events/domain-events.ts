/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-30 16:39:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/domain-events/domain-events.ts
 */
import { AggregateRoot } from '../base-class/aggregate-root';

export class DomainEvents {
  private static aggregates: AggregateRoot<unknown>[] = [];
  public static prepareForPublish(aggregate: AggregateRoot<unknown>): void {
    const aggregateFound = !!this.findAggregateByID(aggregate.id);
    if (!aggregateFound) {
      this.aggregates.push(aggregate);
    }
  }
  
  public static findAggregateByID(
    id: number,
  ): AggregateRoot<unknown> | undefined {
    for (const aggregate of this.aggregates) {
      // if (aggregate.id.equals(id)) {
      //   return aggregate;
      // }
      return undefined;
    }
  }
}
