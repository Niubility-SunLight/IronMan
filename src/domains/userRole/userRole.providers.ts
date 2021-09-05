/*
 * @Author: your name
 * @Date: 2021-08-16 21:30:03
 * @LastEditTime: 2021-09-05 22:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\account.provider.ts
 */
import { Provider } from '@nestjs/common';
import { UserRoleRepository } from './database/userRole.repository';

export const createUserRoleSymbol = Symbol('createUserRole');

// export const createUserRoleProvider: Provider = {
//   provide: createUserRoleSymbol,
//   useFactory: (accountRepo: UserRoleRepository): CreateUserRoleService => {
//     return new CreateUserRoleService(accountRepo);
//   },
//   inject: [UserRoleRepository],
// };
