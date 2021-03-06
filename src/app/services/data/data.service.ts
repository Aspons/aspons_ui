import { Injectable } from '@angular/core';
import {ConstantsService} from '../constants.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private constantsService: ConstantsService
              , private httpClient: HttpClient) {
  }

  getData<T>(url: string) {
    return this.httpClient.get<T>(this.constantsService.getApiUrl() + url);
  }

  postData<T>(url: string, element: T) {
    return this.httpClient.post<T>(this.constantsService.getApiUrl() + url, element);
  }
}
