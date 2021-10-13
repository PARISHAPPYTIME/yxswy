import { Component } from '@angular/core';
import { HttpService } from '../utils/http.service';
import { TokenService } from '../utils/token.service';
import { ActivatedRoute } from '@angular/router'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(
    private http: HttpService,
    private token: TokenService,
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
    theme: 'twotone'
  };

  init() {
    const token = this.token.getToken()
    if (!token) {
      this.showModalMiddle()
    }

    this.validateForm = this.fb.group({
      phoneNumberPrefix: ['+86'],
      username: ['18267094443', [Validators.required]],
      password: ['123456', [Validators.required]],
      agree: [true]
    });

    this.http.get('https://v1.hitokoto.cn/', {}, (data: any) => {
      this.hitokoto = data.hitokoto + " / " + data.from
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

  submitForm(value: { username: string; password: string; }): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (value.username && value.password) {
      this.http.post('/user/login', value).then((res: any) => {
          const token = res.data.token
          this.token.setToken(token)
          console.log(res)
          this.isVisibleMiddle = false
      });
    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  githubLogin() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=4becd600482e091af2b4&redirect_uri=${ encodeURI('http://localhost:4200/welcome') }&scope=user&state=1`
  }
}
