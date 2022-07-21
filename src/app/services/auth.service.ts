import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private web:WebService,
    public router: Router,
  ) {
  }

  get currentUser():user{
    return JSON.parse(localStorage.getItem('user'))
  }
isAdmin():boolean{
  if (localStorage.getItem('user')!= null){
  return this.currentUser.IsAdmin}
  else {return false}
}
setToken(Token:any){
  localStorage.setItem('token',Token)
}
getToken(){
  return localStorage.getItem('token')
}
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    
      this.router.navigate(['login']);
  }

  login(ProxymId: string, password: string) {

    this.web.post('auth/login',{ProxymId,password})
    .subscribe(
    (data)=>{ 
      this.setToken('abcdefghklmnopqrstuvwxyz');
      localStorage.setItem('user',JSON.stringify(data))   
    },
    (err)=>{alert(err.message)})

  }
  get isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null ;
  }
  //register
SignUp(user:user){
  this.web.post('users/signup',user).subscribe(()=>{},(err)=>{alert(err.message)})
  }
  
  //resret password
  ForgotPassword(passwordResetEmail: string) {
    return this.web.post('forgot-pass',passwordResetEmail).subscribe(()=>{})
  }
  editProfile(user:user){
    this.web.post('update/'+user.userID,user)
  }
}
