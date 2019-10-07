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

  getData(url: string) {
    return this.httpClient.get(this.constantsService.getApiUrl() + url + '?page=0&size=100');
  }

  postData(url: string, element: Object) {
    return this.httpClient.post(this.constantsService.getApiUrl() + url, element);
  }
}
