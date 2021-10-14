import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../utils/http.service';
import { UserService } from '../../../utils/user.service';

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

  constructor(private http: HttpService, private user: UserService) {}

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
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'bearer ' + this.user.getToken(),
          })
        }
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
