import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../constants.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private constantsService: ConstantsService
              , private httpClient: HttpClient) {
  }

  getData<T>(url: string) {
    return this.httpClient.get<T>(this.constantsService.getApiUrl() + url + '?page=0&size=100');
  }

  postData<T>(url: string, element: T) {
    return this.httpClient.post<T>(this.constantsService.getApiUrl() + url, element);
  }
}
