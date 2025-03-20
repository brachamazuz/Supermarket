import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserModel } from 'src/app/model/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  step = 1;
  public signupObj = new UserModel();
  constructor(private fb : FormBuilder, private http : HttpClient, private router : Router, private data: DataService) { }
  
  invalid = false;
  
  isUserId = false;

  ngOnInit(): void {
     this.signupForm = this.fb.group({
      clientID: ['',Validators.required],
       email:['',Validators.compose([Validators.required,Validators.email])],
       password:['',Validators.required],
       city:['',Validators.required],
       street:['',Validators.required],
      firstname:[''],
      lastName:['']
      
     })
  }

  nextStep(){
     if (!this.isUserId &&
       this.signupObj.password === this.signupForm.value.password,
       this.signupObj.clientID === this.signupForm.value.clientID,
      this.signupObj.username_email = this.signupForm.value.email
     ) {
      this.invalid = false;
    this.step = 2;
     } else {
      this.invalid = true;
     }
  }


  signUp(){
    this.signupObj.clientID = this.signupForm.value.clientID;
    this.signupObj.username_email = this.signupForm.value.email;
    this.signupObj.password = this.signupForm.value.password;
    this.signupObj.passwordConfirm = this.signupForm.value.passwordConfirm;
    this.signupObj.city = this.signupForm.value.city;
    this.signupObj.street = this.signupForm.value.street;
    this.signupObj.firstName = this.signupForm.value.firstname;
    this.signupObj.lastName = this.signupForm.value.lastName;
    this.data.signUp(this.signupObj)
    .subscribe(res=>{
      if(res.clientID == true){
        alert("The clientID exists in the system ")
        this.router.navigateByUrl("/register");
       }else
      this.signupForm.reset();
      this.router.navigateByUrl("/user-home/products");
      localStorage.setItem('token', res.token);
     }, err=> {
      alert("soomething went wrong")

    
    })

  }
}


