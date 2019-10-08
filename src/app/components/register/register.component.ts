import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data/data.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dataService: DataService) {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  register() {
    const val = this.form.value;

    if (val.firstName && val.lastName && val.username && val.password && val.passwordConfirm) {
      this.dataService.postData<User>('user', {
        firstName: val.firstName,
        lastName: val.lastName,
        username: val.username,
        password: val.password,
        passwordConfirm: val.passwordConfirm,
      })
      .subscribe(
        (res) => {
          console.log('User is created');
          console.log(res);
        }
      );
    }
  }

}
