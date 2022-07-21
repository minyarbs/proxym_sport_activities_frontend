import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    
    this.reactiveForm= new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      phone:new FormControl(null,[Validators.minLength(8),Validators.maxLength(8)]),
      
    });
  }
  submit(){
this.auth.editProfile(this.reactiveForm.value);
this.router.navigate(['../profile'])

  }

}
