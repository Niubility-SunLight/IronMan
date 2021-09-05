/*
 * @Author: your name
 * @Date: 2021-08-30 11:26:30
 * @LastEditTime: 2021-09-05 22:18:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/account/database/account.repository.interface.ts
 */
import { UserRoleEntity, UserRoleProps } from '../models/userRole.entity';
import { RepositoryPort } from '../../../base-framework/ports/repository.ports';

export interface IUserRoleRepository
  extends RepositoryPort<UserRoleEntity, UserRoleProps> {
  findOneById(id: string): Promise<UserRoleEntity>;
  exists(openId: string): Promise<boolean>;
}
