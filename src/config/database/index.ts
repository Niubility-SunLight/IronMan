import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// 读取环境变量
import { config } from 'dotenv';
// 读取
config();

console.log(process)
console.log(process.env)
console.log(config())

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // entities: ['src/**/account.orm-entity.ts'],
  // autoLoadEntities: true,
  // logging: ['error', 'migration', 'schema'],
};
