import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {ConstantsService} from '../constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private constantsService: ConstantsService, private http: HttpClient) {
  }

  login(username: string, password: string ) {
    return this.http.post<User>(this.constantsService.getApiUrl() + 'user/authenticate', {username, password});
  }
}
