import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = 'http://51.158.107.133:8080/aspons/api/';
    // this.apiUrl = 'http://localhost:8080/aspons/api/';
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }
}
