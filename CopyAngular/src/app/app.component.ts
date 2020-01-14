import { Component } from '@angular/core';
import { LoginServiceService } from './Service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-App';

  constructor(private service : LoginServiceService, private router : Router) { }

  ngOnInIt(){
    if(sessionStorage.getItem('status')=='true')
      this.flag = true;
    else
      this.flag = false;
  }
  
  logout(){
    sessionStorage.setItem('status','false');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  flag : boolean;
  tabFlag(){
    console.log(sessionStorage);
    if(sessionStorage.getItem('status')=='true'){
      this.flag = true;
      //this.employee.name = sessionStorage.getItem('empId');
    }
      else
    this.flag = false;
  }
}
