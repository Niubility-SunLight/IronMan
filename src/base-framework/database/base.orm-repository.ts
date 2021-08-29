import { Repository } from 'typeorm';
import { BaseEntityProps } from '../base-class/base.entity';
import { BaseDomainEntity } from 'src/base-framework/base-class/base.entity';
import { BaseOrmMapper } from './base.orm-mapper';
export abstract class BaseOrmRepository<
  Entity extends BaseEntityProps,
  OrmEntity,
> {
  constructor(
    protected readonly repository: Repository<OrmEntity>,
    protected readonly mapper: BaseOrmMapper<Entity, OrmEntity>,
  ) {}

  async save(entity: Entity): Promise<Entity> {
    const ormEntity = this.mapper.toOrmEntity(entity);
    const result = await this.repository.save(ormEntity);
    console.log('[Entity persisted]');
    return this.mapper.toDomainEntity(result);
  }
}
