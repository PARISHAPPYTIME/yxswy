import { Component, OnInit } from '@angular/core';
import { HttpService } from '../utils/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private http: HttpService) {
    this.init();
  }

  isCollapsed = false;
  hitokoto = '';

  init() {
    console.log(123);
    this.http.get('https://v1.hitokoto.cn/', {}, (data: any) => {
      this.hitokoto = data.hitokoto
    });
  }
}
