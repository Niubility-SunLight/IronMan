/*
 * @Author: your name
 * @Date: 2021-08-16 21:31:50
 * @LastEditTime: 2021-08-16 21:36:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \IronMan\src\domains\account\case\create-account\create-account.service.ts
 */
export class CreateAccountService {
  constructor(
    // no direct dependency on a repository, instead depends on a port
    private readonly userRepo: any,
  ) {}

  async createUser(command: any): Promise<any> {
    // user uniqueness any
    // if (await this.userRepo.exists(command.email.value)) {
    //   throw new ConflictException('User already exists');
    // }
    // const user = new UserEntity(command);
    // user.someBusinessLogic();
    // const created = await this.userRepo.save(user);
    // return created.id;
  }
}
