import { Component, OnInit } from '@angular/core';
import { ManagusersService } from 'src/app/services/managusers.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(public users_service:ManagusersService) { 
    }
  allUser=this.users_service.getAllUsers()
  ngOnInit(): void {
  }

}
