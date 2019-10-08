import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  ngOnDestroy() {
  }

}
