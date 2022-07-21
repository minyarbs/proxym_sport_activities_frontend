import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  reactiveForm: FormGroup;

constructor(private auth:AuthService , private route:Router){}
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required,this.emailcheck]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      userID: new FormControl(null),
      phone:new FormControl(null,[Validators.minLength(8),Validators.maxLength(8)]),
      
    });
  }
 
 submit(){
 this.auth.SignUp(this.reactiveForm.value)

  }

emailcheck(control:FormControl){
  if (control.value!= null && control.value.indexOf('@proxym-it.com')==-1){
    return{emailcheck: true}
    
  }
  return null;
}
}
