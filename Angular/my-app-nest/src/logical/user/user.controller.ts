import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create();

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

  @Post('githubLogin')
  async githubLogin(@Body() body) {
    const code = body.code;
    const ClientID = '4becd600482e091af2b4';
    const ClientSecret = '924c4b5fd05a57a625ee6c11dad93315d7bd43c0';
    console.log(encodeURIComponent('http://localhost:4200/welcome'));
    const config: AxiosRequestConfig = {
      method: 'post',
      url:
        'https://github.com/login/oauth/access_token?' +
        `client_id=${ClientID}&` +
        `client_secret=${ClientSecret}&` +
        `redirect_uri=${encodeURIComponent('http://localhost:4200/welcome')}&` +
        `code=${code}`,

      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    console.log(1);
    const res: any = await request(config);
    const access_token = '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';
    console.log(res);
    const config2: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.github.com/user?access_token=${res.data.access_token}`,

      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: 'bearer ' + access_token,
      },
    };
    const res2 = await request(config2);
    console.log(res2.data);

    return {
      code: 200,
      data: res2.data,
      message: 'success',
    };
    // 924c4b5fd05a57a625ee6c11dad93315d7bd43c0
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
