import {Component, OnInit} from '@angular/core';
import {Association} from '../../model/association';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public associationsList: Association[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData('associations/_me').subscribe(associations => {
      console.log(associations);
    });
  }
}
