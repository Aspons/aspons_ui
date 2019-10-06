import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.dataService.getData('users').subscribe(users => {
      console.log(users);
    });
  }

}
