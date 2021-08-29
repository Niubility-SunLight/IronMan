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
    id: string,
  ): AggregateRoot<unknown> | undefined {
    for (const aggregate of this.aggregates) {
      // if (aggregate.id.equals(id)) {
      //   return aggregate;
      // }
      return undefined;
    }
  }
}
