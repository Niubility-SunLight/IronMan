import { RepositoryPort } from './../ports/repository.ports';
import { FindConditions, ObjectLiteral, Repository } from 'typeorm';
import { BaseEntityProps } from '../base-class/base.entity';
import { BaseOrmMapper } from './base.orm-mapper';
import { QueryParams } from '../ports/repository.ports';

export type WhereCondition<OrmEntity> =
  | FindConditions<OrmEntity>[]
  | FindConditions<OrmEntity>
  | ObjectLiteral
  | string;

export abstract class BaseOrmRepository<
  Entity extends BaseEntityProps,
  EntityProps,
  OrmEntity,
> implements RepositoryPort<Entity, EntityProps>
{
  constructor(
    protected readonly repository: Repository<OrmEntity>,
    protected readonly mapper: BaseOrmMapper<Entity, OrmEntity>,
  ) {}

  protected abstract relations: string[] = [];
  protected abstract prepareQuery(
    params: QueryParams<EntityProps>,
  ): WhereCondition<OrmEntity>;

  async findOne(
    params: QueryParams<EntityProps> = {},
  ): Promise<Entity | undefined> {
    const where = params;
    const found = await this.repository.findOne({
      where,
      relations: this.relations,
    });
    return found ? this.mapper.toDomainEntity(found) : undefined;
  }

  async save(entity: Entity): Promise<Entity> {
    const ormEntity = this.mapper.toOrmEntity(entity);
    const result = await this.repository.save(ormEntity);
    console.log('[Entity persisted]');
    return this.mapper.toDomainEntity(result);
  }
}
