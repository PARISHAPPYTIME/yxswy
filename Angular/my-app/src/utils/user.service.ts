import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private token: string | undefined | null;
  private user: Record<string, any> | null = null;
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('angular_app_token', token);
    this.token = token;
  }

  removeToken() {
    this.token = undefined;
  }

  getToken() {
    if (this.token) return this.token;
    const tokrn = localStorage.getItem('angular_app_token');
    return tokrn || '';
  }

  setUserInfo(userInfo: Record<string, any>) {
    console.log('shezhi', JSON.stringify(userInfo));
    localStorage.setItem('angular_app_userInfo', JSON.stringify(userInfo));
    this.user = userInfo;
  }

  getUserInfo() {
    const userInfo: string | null = localStorage.getItem(
      'angular_app_userInfo'
    );
    return userInfo ? JSON.parse(userInfo) : false;
  }
}
