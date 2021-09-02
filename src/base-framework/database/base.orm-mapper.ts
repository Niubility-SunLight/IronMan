/*
 * @Author: Liu Liang
 * @Date: 2021-07-22 20:53:10
 * @LastEditTime: 2021-09-02 22:13:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\base-framework\database\base.orm-mapper.ts
 */
import { BaseEntityProps } from '../base-class/base.entity';
import { BaseOrmEntity } from './base.orm-entity';

/**
 * @description TS 3.5后内置帮助类型，排除其他不需要的属性
 */
export type OrmEntityProps<OrmEntity> = Omit<
  OrmEntity,
  'id' | 'createdAt' | 'updatedAt' | 'isDelete' | 'deletedAt'
>;
export abstract class BaseOrmMapper<Entity extends BaseEntityProps, OrmEntity> {
  constructor(
    private entityConstructor: new (...args: any[]) => Entity,
    private ormEntityConstructor: new (...args: any[]) => OrmEntity,
  ) {}

  protected abstract toOrmProps(entity: Entity): OrmEntityProps<OrmEntity>;
  protected abstract toDomainProps(ormEntity: OrmEntity): unknown;

  toOrmEntity(entity: Entity): OrmEntity {
    const props = this.toOrmProps(entity);
    return new this.ormEntityConstructor({
      ...props,
      id: entity.id,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      isDelete: entity.isDelete,
      deletedAt: entity.deletedAt,
    });
  }

  toDomainEntity(ormEntity: OrmEntity): Entity {
    const props = this.toDomainProps(ormEntity);
    console.log(props);
    const entity = this.assignPropsToEntity(props, ormEntity);
    return entity;
  }

  private assignPropsToEntity<Props>(
    entityProps: Props,
    ormEntity: OrmEntity,
  ): Entity {
    const entityCopy: any = Object.create(this.entityConstructor.prototype);
    const baseOrmEntity: BaseOrmEntity = ormEntity as unknown as BaseOrmEntity;
    entityCopy.props = entityProps;
    entityCopy._id = baseOrmEntity.id;
    entityCopy._createdAt = baseOrmEntity.createdAt;
    entityCopy._updatedAt = baseOrmEntity.updatedAt;
    entityCopy._isDelete = baseOrmEntity.isDelete;
    entityCopy._deletedAt = baseOrmEntity.deletedAt;
    console.log(entityCopy)
    return entityCopy as unknown as Entity;
  }
}
