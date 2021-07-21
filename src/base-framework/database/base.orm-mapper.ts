import { BaseEntityProps } from '../domain/base.entity';
import { BaseOrmEntity } from './base.orm-entity';
export type OrmEntityProps<OrmEntity> = Omit<
  OrmEntity,
  'id' | 'createdAt' | 'updatedAt'
>;
export abstract class BaseOrmMapper<Entity extends BaseEntityProps, OrmEntity> {
  constructor(
    private entityConstructor: new (...args: any[]) => Entity,
    private ormEntityConstructor: new (...args: any[]) => OrmEntity,
  ) {}

  protected abstract toDomainProps(ormEntity: OrmEntity): unknown;
  protected abstract toOrmProps(entity: Entity): OrmEntityProps<OrmEntity>;

  protected toOrmEntity(entity: Entity): OrmEntity {
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

  protected toDomainEntity(ormEntity: OrmEntity): Entity {
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
