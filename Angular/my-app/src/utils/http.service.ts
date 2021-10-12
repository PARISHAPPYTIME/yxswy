import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl4c3d5Iiwic3ViIjo2LCJyZWFsTmFtZSI6IueDn-eGj-S4ieaWh-mxvCIsInJvbGUiOjMsImlhdCI6MTYzNDAxNjc4MiwiZXhwIjoxNjM0MDQ1NTgyfQ.SR9hTqcCJ_oqgv-8jCbCyKXtE9ELR7sv6C7rZg5rNVc';
const commonHeaders = { Authorization: 'Bearer ' + token };

@Injectable()
export class HttpService {
  public restServer;
  public http;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.restServer = 'http://localhost:3010';
  }

  _url(url: string) {
    return url.indexOf('http') === -1 ? this.restServer + url : url;
  }

  public get(
    url: string,
    params?: Record<string, any>,
    cb?: Function,
    headerOptions?: Record<string, string>
  ) {
    let httpParams = new HttpParams();
    // console.log('get开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http
      .get(vm._url(url), {
        params: httpParams,
        headers: { ...headerOptions, ...commonHeaders },
      })
      .subscribe((data) => {
        // console.log('get请求结束', data);
        cb?.(data);
      });
  }

  public post(url: string, data?: Record<string, any>, options?: Object) {
    console.log(url, data, options);
    return new Promise((resolve, reject) => {
      this.http.post(this._url(url), data, options).subscribe((res) => {
        resolve(res);
      });
    });
  }

  public put(url: string, data?: Object, cb?: Function, options?: Object) {
    console.log('put开始请求');
    const vm = this;
    vm.http.put(vm._url(url), data, options).subscribe((res) => {
      console.log('put请求结束', res);
      cb?.(res);
    });
  }

  public delete(url: string, params?: Record<string, any>, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('delete开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.delete(vm._url(url), { params: httpParams }).subscribe((data) => {
      console.log('delete请求结束', data);
      cb?.(data);
    });
  }
}
