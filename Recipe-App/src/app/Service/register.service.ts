import { Injectable } from '@angular/core';
import { UserModel } from '../Model/User';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private myhttp:HttpClient) { }

  registerUserService(user : UserModel): Observable<UserModel>{
      let form=new FormData();
         // form.append("userId", String(user.userId));
          form.append("userName",String(user.userName));
          form.append("emailId",String(user.emailId));
          form.append("password", String(user.password));
          form.append("phoneNumber",(user.phoneNumber));
  
      return this.myhttp.post<UserModel>('http://'+ window.location.hostname+':8888/frs/addUser',form);
    }
}
