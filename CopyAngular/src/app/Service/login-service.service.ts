import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserModel } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  flag : boolean = false;
  user: UserModel;

  constructor(private myhttp: HttpClient) { }

  authenticate(emailId: string, password: string) {
    console.log("Inside service authenticate.. email: " + emailId + " password: " + password);
    const reqbody = { email: emailId, password: password };
    console.log(JSON.stringify(reqbody))
    return this.myhttp.post<any>('http://'+ window.location.hostname+':8888/frs/login', { userEmail: emailId, password: password });
  }

  saveUser(users : UserModel){
    console.log("saving user");
    this.user = users;
    console.log(users);
    console.log(sessionStorage);
    
  }
}
