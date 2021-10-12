import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../utils/http.service';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inl4c3d5Iiwic3ViIjo2LCJyZWFsTmFtZSI6IueDn-eGj-S4ieaWh-mxvCIsInJvbGUiOjMsImlhdCI6MTYzNDAxNjc4MiwiZXhwIjoxNjM0MDQ1NTgyfQ.SR9hTqcCJ_oqgv-8jCbCyKXtE9ELR7sv6C7rZg5rNVc';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + token,
  }),
};
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  reverse = false;
  loading = false;
  messages: any[] = [];
  content: string = '';
  content2: any = '';

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.get('/synchronous', {}, (res: any) => {
      this.content = res.data.content;
      this.content2 = res.data.content;
    });
  }

  saveContent(): void {
    this.loading = true;
    this.http
      .post(
        '/synchronous',
        {
          content: this.content2,
        },
        httpOptions
      )
      .then((res: any) => {
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
  }

  editInput(event: any) {
    // console.log();
    this.content2 = event.target.innerHTML;
  }
}
