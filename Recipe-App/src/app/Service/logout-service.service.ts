import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {

  constructor(private http: HttpClient) { }
  flag : boolean = false;
  user: UserModel;

  deleteUser() {
    console.log("Logged out successfully!")
    this.user = null;
    sessionStorage.clear();
    alert("Logged out!");
  }
}
