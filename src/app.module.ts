import { AccountOrmEntity } from './models/account/database/account.orm-entity';
import { AccountEntity } from './models/account/domain/account.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database/index';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([AccountOrmEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
