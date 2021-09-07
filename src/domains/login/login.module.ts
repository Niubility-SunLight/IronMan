import { GetOpenIdHttpController } from './case/getOpenId/getOpenId.controller';
import { GetOpenIdService } from './case/getOpenId/getOpenId.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { getOpenIdProvider } from './login.providers';

@Module({
  imports: [HttpModule],
  controllers: [GetOpenIdHttpController],
  providers: [GetOpenIdService, getOpenIdProvider],
})
export class LoginModule {}
