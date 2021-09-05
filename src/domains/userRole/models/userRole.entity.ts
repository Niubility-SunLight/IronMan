import { AggregateRoot } from 'src/base-framework/base-class/aggregate-root';
export interface UserRoleProps {
  readonly roleType: string;
  nickName: string;
  realName: string;
  gender: string;
  avatarUrl: string;
}
export class UserRoleEntity extends AggregateRoot<UserRoleProps> {
  constructor(props: UserRoleProps) {
    super(props);
  }

  get roleType(): string {
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
