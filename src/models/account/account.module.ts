import { AccountOrmEntity } from './database/account.orm-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity])],
})
export class AccountModule {}
