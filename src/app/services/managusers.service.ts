import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SportEvent } from '../models/SportEvent';
import { user } from '../models/user';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ManagusersService {
  
  allUsers:user[]=[]

  constructor(private web: WebService) { 
    this.getAllUsers()
  }

  getAllUsers(){
    this.web.get('users/all').pipe(map((res)=>{
      const users=[]
      for (const key in res){
        if(res.hasOwnProperty(key)){
        users.push({...res[key],id: key})}
      }
      return users;
    })).subscribe((list)=>{
      this.allUsers=list;
    },(err)=>{
      alert(err.message)
    }
    )
    return this.allUsers
  }
  find(Id:string){
    return this.allUsers.find(x=>x.userID=Id)
  }
  MakeAdmin(ID:string){
    let updateuser=this.find(ID)
    updateuser.IsAdmin=true;
    this.web.patch('update/'+ID,updateuser)
  }
  DeleteUser(ID:string){
    this.web.delete('delete/'+ID);
  }
 
}
