import { Component, OnInit } from '@angular/core';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router,private auth:AuthService){

  }
  loggedin:boolean=this.auth.isLoggedIn;
  //loggedin=true;
  isAdmin=this.auth.isAdmin();
  //isAdmin=true
  ngOnInit(): void { this.router.events.pipe(
    filter((event: RouterEvent) => event instanceof NavigationEnd)
  ).subscribe(() => {
   // this.refresh();
  });
  }
 logout(){
  this.auth.logout(); this.refresh();
 }
 refresh(){
  this.loggedin=this.auth.isLoggedIn;
  this.isAdmin=this.auth.isAdmin()
}
}
