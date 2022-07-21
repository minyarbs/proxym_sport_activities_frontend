import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EventManagService } from 'src/app/services/event-manag.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
 
  joined=false;

  constructor(public manag:EventManagService,private auth:AuthService) { 
    this.manag.getSportList();
  }
  
  A:any;
  clicked=false;
  ngOnInit(): void {
  }

  Join(id:any){
    let currentEvent= this.manag.AllEvents.find((e)=>{return e.id===id})
    currentEvent!.players.push(this.auth.currentUser)
     this.joined=true;
     this.manag.joinEvent(this.A.name,id,currentEvent)
  }
  goto(id:any){
    
    this.A=this.manag.SportList.find(x => x.id=== id);
    this.manag.fetchEvents(this.A.name)
    
    this.clicked=true;
    
  }
  
  
}
