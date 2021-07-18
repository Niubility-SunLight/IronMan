import { DateVo } from '../value-objects/date.value-object';
interface EntityProps {
  id: number;
  createAt: DateVo;
  updateAt: DateVo;
  isDelete: boolean;
  deleteAt: DateVo;
}
export abstract class BaseDomainEntity<BaseDomainEntityProps> {
  protected readonly props: BaseDomainEntityProps;
  private readonly _createdAt: DateVo;
  private _updatedAt: DateVo;
  private _isDelete: boolean;
  private _deletedAt: DateVo;
  constructor(props: BaseDomainEntityProps) {
    const now = DateVo.now();
    this._createdAt = now;
    this._updatedAt = now;
    this.props = props;
  }

  get createdAt(): DateVo {
    return this._createdAt;
  }

  get updatedAt(): DateVo {
    return this._updatedAt;
  }

  get isDelete(): boolean {
    return this.isDelete;
  }

  get deletedAt(): DateVo {
    return this._deletedAt;
  }
}
