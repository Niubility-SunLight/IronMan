import { BaseDomainEntity } from 'src/base-framework/domain/base.entity';
interface AccountProps {
  openId: string;
  unionId: string;
  mobile: string;
  password: string;
}
export class AccountEntity extends BaseDomainEntity<AccountProps> {
  constructor(props: AccountProps) {
    super(props);
  }
}
