import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  private subscribes: Subscription[];
  private isPageLoaded = false;

  constructor(private dataService: DataService) {
    this.subscribes = [];
  }

  ngOnInit() {
    this.subscribes.push(
      this.dataService.getData('').subscribe(() => {
      })
    );
  }

  ngOnDestroy() {
    this.subscribes.forEach(subs => {
      subs.unsubscribe();
    });
  }

}
