import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginParmas: any) {
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  testApi() {
    return 'post';
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('test')
  testApi2() {
    return 'get';
  }

  @Post('register')
  async register(@Body() body: any) {
    return this.usersService.register(body);
  }
}
