import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:8080/aspons/api/';
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }
}
