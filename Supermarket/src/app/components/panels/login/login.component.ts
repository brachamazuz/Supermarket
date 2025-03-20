import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserModel } from 'src/app/model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public loginObj = new UserModel();
  errors: any;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
    // localStorage.clear();
  }
  
  login() {
    this.loginObj.username_email = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;
    this.data.login(this.loginObj)
      .subscribe((res) => {
        localStorage.setItem("loggedInUserId", res.clientID);
        localStorage.setItem("loggedInUser", JSON.stringify({"firstName" : res.firstName}));
        localStorage.setItem("loggedUserName", res.firstName);
           
           // localStorage["loginData"] = JSON.stringify();
          

        if (res.role == "admin") {
          console.log("line 40");
          this.router.navigateByUrl("/admin");
        }
        else {
          console.log("line 55");
          this.router.navigateByUrl("/user-home/products");
          localStorage.setItem('token', res.token);
          localStorage.setItem('userType', res.role);
        }
      }, err => {
        alert("soomething went wrong")
      })
  }


}














