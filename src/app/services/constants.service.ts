import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = environment.API_URL;
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }
}
