import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Model/User';
import { RecipeModel } from '../Model/Recipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../Service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : UserModel = new UserModel();
  userId:any = '';
  userName:any = '';
  emailId:any = '';
  phoneNumber:Number = 0;
  password : any = '';
  recipes : RecipeModel[];

  usr : UserModel;
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  submitted = false;
  angForm: FormGroup;

  constructor(private registerSerivce: RegisterService, private router: Router, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
         name: ['', Validators.required ]
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new UserModel();
  }

  registerUser(){
    this.registerSerivce.registerUserService(this.user).subscribe(data => {
      this.usr = data;
      if(this.usr.userId == null)
        this.router.navigate(['register']);
      else{
          this.router.navigate(['login']);
          alert("Registered Successfully");
      }
  });
  }

  onSubmit() {
    this.submitted = true;
    this.registerUser();
  }


}
