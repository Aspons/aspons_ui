import * as moment from 'moment';

import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../../model/user';
import {ConstantsService} from '../constants.service';
import 'rxjs-compat/add/operator/do';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private constantsService: ConstantsService
              , private http: HttpClient
              , private router: Router
              , private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  login(username: string, email: string, password: string ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<User>(this.constantsService.getApiUrl() + 'users?username=' + username + '&email=' + email + '&password=' + password, httpOptions)
      .pipe(first())
      .subscribe((res) => {
        this.setSession(res);
        this.router.navigateByUrl('dashboard');
      });
  }

  private setSession(auth) {

    console.log(auth);
    const authResult = auth['access_token'];
    const expiresAt = moment().add(auth['expires_in'], 'second');

    localStorage.setItem('id_token', authResult);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
