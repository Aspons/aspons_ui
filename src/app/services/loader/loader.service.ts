import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isPageLoaded = new Subject<boolean>();

  constructor() { }

  setPageIsLoaded(isPageLoaded: boolean) {
    this.isPageLoaded.next(isPageLoaded);
  }

  getPageIsLoaded(): Subject<boolean> {
    return this.isPageLoaded;
  }
}
