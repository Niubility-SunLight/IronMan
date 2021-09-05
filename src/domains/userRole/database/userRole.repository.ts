import { UserRoleEntity, UserRoleProps } from '../models/userRole.entity';
/*
 * @Author: your name
 * @Date: 2021-08-16 20:58:42
 * @LastEditTime: 2021-09-05 22:20:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\userRole\database\userRole.repository.ts
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  BaseOrmRepository,
  WhereCondition,
} from 'src/base-framework/database/base.orm-repository';

import { BaseEntityProps } from 'src/base-framework/base-class/base.entity';
import { DeepPartial } from 'src/base-framework/types/deepPartial';
import { UserRoleOrmEntity } from './userRole.orm-entity';
import { IUserRoleRepository } from './userRole.repository.interface';
import { UserRoleOrmMapper } from './userRole.orm-mapper';

@Injectable()
export class UserRoleRepository
  extends BaseOrmRepository<UserRoleEntity, UserRoleProps, UserRoleOrmEntity>
  implements IUserRoleRepository
{
  constructor(
    @InjectRepository(UserRoleOrmEntity)
    private readonly userRoleRepository: Repository<UserRoleOrmEntity>,
  ) {
    super(
      userRoleRepository,
      new UserRoleOrmMapper(UserRoleEntity, UserRoleOrmEntity),
    );
  }

  protected relations: string[];
  protected prepareQuery(
    params: DeepPartial<BaseEntityProps & UserRoleProps>,
  ): WhereCondition<UserRoleOrmEntity> {
    throw new Error('Method not implemented.');
  }

  async findOneById(id: string): Promise<UserRoleEntity> {
    const userRole = await this.userRoleRepository.findOne(id);
    if (!userRole) {
      throw Error();
    }
    return this.mapper.toDomainEntity(userRole);
  }

  async exists(openId: string): Promise<boolean> {
    const found = await this.userRoleRepository.findOne(openId);
    if (found) {
      return true;
    }
    return false;
  }
}
