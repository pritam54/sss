import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Service/login-service.service';
import { Router } from '@angular/router';
import { UserModel } from '../Model/User';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:Number;
  userName:String;
  emailId:string;
  password : string;
  user:UserModel;

  constructor(private service : LoginServiceService,private appComponent:AppComponent, private router :Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  LoginUser() {
    console.log("Inside login.ts checkLogin.. email: " + this.emailId + " password: " + this.password)
    this.service.authenticate(this.emailId, this.password).subscribe(
      userData => {
        this.user = userData;

        if(this.user == null){
          alert("User does not exist. Try again!")
          this.router.navigate(['login']);
        }
        else{
          sessionStorage.setItem('emailId', String(this.user.emailId));
          sessionStorage.setItem('password',String(this.user.password));
        //sessionStorage.setItem('name', String(this.employee.name));
          sessionStorage.setItem('status','true');
          this.service.saveUser(this.user);
          this.appComponent.tabFlag();
          this.router.navigate(['search']);
          alert("Login Successful");
        }
        error => alert("User not logged in!");
      });
    }


  checkRoles(){

    if (sessionStorage.getItem('userRole') === "ROLE_Customer") {
      this.router.navigate(['/userhome']).then(()=>{window.location.reload();});
    } 
    else if(sessionStorage.getItem('userRole') === "ROLE_Admin"){
      this.router.navigate(['/adminhome']).then(()=>{window.location.reload();});
    }
    
  }


}
