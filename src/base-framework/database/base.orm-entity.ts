import {
  CreateDateColumn,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseOrmEntity {
  constructor(props?: unknown) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @PrimaryColumn({ type: 'uuid', update: false })
  id!: string;

  @Column({ type: 'tinyint' })
  isDelete!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt!: Date;
}
