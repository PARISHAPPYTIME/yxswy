import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user) {
      const hashedPassword = user.password;
      const salt = user.salt;
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        return {
          code: 1,
          user,
        };
      } else {
        // 密码错误
        return {
          code: 2,
          user: null,
        };
      }
    }
    return {
      code: 3,
      user: null,
    };
  }

  async certificate(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      realName: user.realName,
      role: user.role,
    };

    try {
      const token = this.jwtService.sign(payload);
      return {
        code: 200,
        data: {
          token,
        },
        msg: `登录成功`,
      };
    } catch (error) {
      return {
        code: 600,
        msg: `账号或密码错误`,
      };
    }
  }
}
