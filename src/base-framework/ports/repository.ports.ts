/*
 * @Author: your name
 * @Date: 2021-08-31 16:06:22
 * @LastEditTime: 2021-08-31 17:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/base-framework/ports/repository.ports.ts
 */
import { BaseEntityProps } from './../base-class/base.entity';
import { DeepPartial } from './../types/deepPartial';

export type QueryParams<EntityProps> = DeepPartial<
  BaseEntityProps & EntityProps
>;

export interface RepositoryPort<Entity, EntityProps> {
  save(entity: Entity): Promise<Entity>;
  findOne(params: QueryParams<EntityProps>): Promise<Entity>;
}
