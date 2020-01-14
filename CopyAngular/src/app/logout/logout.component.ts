import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router';
import { LogoutServiceService } from '../Service/logout-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appComponent : AppComponent, private loginService : LoginServiceService,private logoutService : LogoutServiceService, private router : Router) { }

  ngOnInit() {
    this.logoutService.deleteUser();
    this.appComponent.tabFlag();
    this.router.navigate(['login']);
  }

}
