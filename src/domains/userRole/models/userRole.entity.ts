/*
 * @Author: your name
 * @Date: 2021-09-06 09:40:59
 * @LastEditTime: 2021-09-06 14:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /IronMan/src/domains/userRole/models/userRole.entity.ts
 */
import { AggregateRoot } from 'src/base-framework/base-class/aggregate-root';
export interface UserRoleProps {
  readonly accountId?: number;
  readonly roleType: number;
  nickName?: string;
  realName?: string;
  gender?: string;
  avatarUrl?: string;
}
export class UserRoleEntity extends AggregateRoot<UserRoleProps> {
  constructor(props: UserRoleProps) {
    super(props);
  }

  get accountId(): number {
    return this.props.accountId;
  }

  get roleType(): number {
    return this.props.roleType;
  }
  get nickName(): string {
    return this.props.nickName;
  }
  get realName(): string {
    return this.props.realName;
  }
  get gender(): string {
    return this.props.gender;
  }
  get avatarUrl(): string {
    return this.props.avatarUrl;
  }
}
