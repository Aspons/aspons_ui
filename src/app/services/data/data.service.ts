import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'précisez URL';
  }

  getData(url: string) {
    return this.httpClient.get(this.apiUrl + url);
  }

  postData(url: string, element: Object) {
    return this.httpClient.post(this.apiUrl + url, element);
  }

  putData(url: string, element: Object) {
    return this.httpClient.put(this.apiUrl + url, element);
  }
}
