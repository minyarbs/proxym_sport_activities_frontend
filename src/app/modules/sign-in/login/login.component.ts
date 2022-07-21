import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  Form: FormGroup;

  
  constructor(private route:Router,private auth:AuthService){
    this.Form= new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
    });
  }
    submit(){
    this.auth.login(this.Form.value.email,this.Form.value.password)

  }
    
    gotoFP(){
      this.route.navigate(['login/forgot-password'])
    }
  
  }
  