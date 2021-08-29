import { BaseDomainEntity } from 'src/base-framework/base-class/base.entity';
export interface AccountProps {
  openId: string;
  unionId: string;
  mobile: string;
  password: string;
}
export class AccountEntity extends BaseDomainEntity<AccountProps> {
  constructor(props: AccountProps) {
    super(props);
  }

  get openId(): string {
    return this.props.openId;
  }
  get unionId(): string {
    return this.props.unionId;
  }
  get mobile(): string {
    return this.props.mobile;
  }
  get password(): string {
    return this.props.password;
  }
}
