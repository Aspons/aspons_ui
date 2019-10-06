import * as moment from 'moment';

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../../model/user';
import {ConstantsService} from '../constants.service';
import 'rxjs-compat/add/operator/do';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private constantsService: ConstantsService, private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string ) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };
    return this.http.post<User>(this.constantsService.getApiUrl() + 'user/authenticate', {username, password}, httpOptions)
      .pipe(first())
      .subscribe((res: HttpResponse<any>) => {
        this.setSession(res);
        this.router.navigateByUrl('dashboard');
      });
  }

  private setSession(auth) {
    const authResult = auth.headers.get('authorization');
    const expiresAt = moment().add(60 * 30, 'second');

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
