import { Injectable } from '@nestjs/common';
// import * as Sequelize from 'sequelize';
// import sequelize from '../../database/sequelize';
import { makeSalt, encryptPassword } from '../../utils/cryptogram';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async findOne(username: string): Promise<any | undefined> {
    const sql = `
      SELECT
        id userId, account_name username, real_name realName, passwd password,
        passwd_salt salt, mobile, role
      FROM
        user_entity
      WHERE
        account_name = '${username}'
    `;
    try {
      const res = await getManager().query(sql);
      return res[0];
    } catch (error) {
      console.log(error);
      return void 0;
    }
  }

  async register(requestBody: any): Promise<any> {
    const { accountName, realName, password, repassword, mobile } = requestBody;
    if (password !== repassword) {
      return {
        code: 400,
        msg: '两次密码输入不一致',
      };
    }
    const user = await this.findOne(accountName);
    if (user) {
      return {
        code: 400,
        msg: '用户已存在',
      };
    }
    const salt = makeSalt(); // 制作密钥
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const sql = `
      INSERT INTO user_entity
        (account_name, real_name, passwd, passwd_salt, mobile, user_status, role)
      VALUES
        ('${accountName}', '${realName}', '${hashPwd}', '${salt}', '${mobile}', 1, 3)
    `;
    try {
      const res = await getManager().query(sql);
      console.log(res);
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      console.log(error);
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
