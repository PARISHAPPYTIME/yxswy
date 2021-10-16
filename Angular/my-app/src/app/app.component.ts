import { Component } from '@angular/core';
import { HttpService } from '../utils/http.service';
import { UserService } from '../utils/user.service';
import { ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(
    private http: HttpService,
    private user: UserService,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.init();
  }

  isCollapsed = false;
  hitokoto = '';
  isVisibleMiddle = false;
  validateForm!: FormGroup;

  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  init() {
    const token = this.user.getToken();
    if (!token) {
      this.showModalMiddle();
    }

    this.validateForm = this.fb.group({
      phoneNumberPrefix: ['+86'],
      username: ['18267094443', [Validators.required]],
      password: ['123456', [Validators.required]],
      agree: [true],
    });

    this.http.get('https://v1.hitokoto.cn/', {}, (data: any) => {
      this.hitokoto = data.hitokoto + ' / ' + data.from;
    });

    this.router.queryParams.subscribe((queryParams) => {
      const code = queryParams.code;
      if (code) {
        this.http.post('/user/githubLogin', { code }).then((res: any) => {
          const userInfo = {
            login: 'PARISHAPPYTIME',
            id: 40844077,
            node_id: 'MDQ6VXNlcjQwODQ0MDc3',
            avatar_url: 'https://avatars.githubusercontent.com/u/40844077?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/PARISHAPPYTIME',
            html_url: 'https://github.com/PARISHAPPYTIME',
            followers_url:
              'https://api.github.com/users/PARISHAPPYTIME/followers',
            following_url:
              'https://api.github.com/users/PARISHAPPYTIME/following{/other_user}',
            gists_url:
              'https://api.github.com/users/PARISHAPPYTIME/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/PARISHAPPYTIME/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/PARISHAPPYTIME/subscriptions',
            organizations_url:
              'https://api.github.com/users/PARISHAPPYTIME/orgs',
            repos_url: 'https://api.github.com/users/PARISHAPPYTIME/repos',
            events_url:
              'https://api.github.com/users/PARISHAPPYTIME/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/PARISHAPPYTIME/received_events',
            type: 'User',
            site_admin: false,
            name: '烟熏三文鱼',
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: null,
            twitter_username: null,
            public_repos: 21,
            public_gists: 0,
            followers: 5,
            following: 20,
            created_at: '2018-07-05T01:37:23Z',
            updated_at: '2021-10-04T10:54:30Z',
            private_gists: 0,
            total_private_repos: 2,
            owned_private_repos: 2,
            disk_usage: 75436,
            collaborators: 0,
            two_factor_authentication: false,
            plan: {
              name: 'free',
              space: 976562499,
              collaborators: 0,
              private_repos: 10000,
            },
          };
          // this.validateForm.
          this.user.setUserInfo(userInfo);
          this.http
            .post('/user/login', {
              username: userInfo.login,
              password: userInfo.node_id,
            })
            .then((res: any) => {
              const token = res.data.token;
              this.user.setToken(token);
              console.log(res);
              this.isVisibleMiddle = false;
            })
            .finally(() => {
              window.history.pushState({}, '', '/welcome');
            });
        });
      }
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm(value: { username: string; password: string }): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (value.username && value.password) {
      this.http.post('/user/login', value).then((res: any) => {
        const token = res.data.token;
        this.user.setToken(token);
        console.log(res);
        this.isVisibleMiddle = false;
      });
    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  githubLogin() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=4becd600482e091af2b4&redirect_uri=${encodeURI(
      'http://localhost:4200/welcome'
    )}&scope=user&state=1`;
  }
}
