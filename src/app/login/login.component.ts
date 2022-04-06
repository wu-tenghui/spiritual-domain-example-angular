import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NoticeService} from '../../service/notice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private noticeService: NoticeService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitLoginForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      if ('Administrator' == this.loginForm.value.username && '1234567890' == this.loginForm.value.password) {
        window.localStorage.setItem('token', this.loginForm.value.username);
        this.router.navigate(['main']).then().catch();
      } else {
        this.noticeService.error('用户名或密码错误');
      }
    }
  }

  forgetPassword(): void {
    this.noticeService.warning("忘记密码？请联系管理员！");
  }

}
