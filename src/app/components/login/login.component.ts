import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.username, val.password);
      /*
        .subscribe(
          (res) => {
            console.log('User is logged in');
            console.log(res);
            this.router.navigateByUrl('/dashboard');
          }
        ); */
    }
  }
}
