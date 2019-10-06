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
    return this.httpClient.get(this.constantsService.getApiUrl() + url);
  }

  postData(url: string, element: Object) {
    return this.httpClient.post(this.constantsService.getApiUrl() + url, element);
  }

  putData(url: string, element: Object) {
    return this.httpClient.put(this.constantsService.getApiUrl() + url, element);
  }
}
