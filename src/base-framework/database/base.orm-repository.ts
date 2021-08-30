/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-08-30 17:56:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/database/base.orm-repository.ts
 */
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

  // protected abstract prepareQuery(
  //   params: QueryParams<EntityProps>,
  // ): WhereCondition<OrmEntity>;

  async findOne(params: QueryParams<EntityProps>) {}

  async save(entity: Entity): Promise<Entity> {
    const ormEntity = this.mapper.toOrmEntity(entity);
    const result = await this.repository.save(ormEntity);
    console.log('[Entity persisted]');
    return this.mapper.toDomainEntity(result);
  }
}
