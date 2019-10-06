import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderService} from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private isPageLoaded: boolean;
  private subscribes: Subscription[];

  constructor(private loaderService: LoaderService) {
    this.isPageLoaded = false;
    this.subscribes = [];
    this.subscribes.push(
      this.loaderService.getPageIsLoaded().subscribe(value => {
        this.isPageLoaded = value;
      })
    );
  }

  public getIsPageLoaded() {
    return this.isPageLoaded;
  }

  ngOnInit() {
    this.loaderService.setPageIsLoaded(true);
  }

  ngOnDestroy() {
    this.subscribes.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
