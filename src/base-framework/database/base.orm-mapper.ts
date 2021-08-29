/*
 * @Author: Liu Liang
 * @Date: 2021-07-22 20:53:10
 * @LastEditTime: 2021-08-15 22:21:29
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
    entityCopy.id = baseOrmEntity.id;
    entityCopy.createdAt = baseOrmEntity.createdAt;
    entityCopy.updatedAt = baseOrmEntity.updatedAt;
    entityCopy.isDelete = baseOrmEntity.isDelete;
    entityCopy.deletedAt = baseOrmEntity.deletedAt;

    return;
  }
}
