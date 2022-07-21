
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { sport } from '../models/sport';
import { SportEvent } from '../models/SportEvent';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class EventManagService {
AllEvents:SportEvent[]=[]
errorMessage:string="";
 SportList:sport[]=[] 
 isfetching:boolean=false;

  constructor(private web:WebService) {
    this.getSportList();
   }
  getSportList(){
    
    this.web.get('category/all').pipe(map((res)=>{
      const products=[]
      for (const key in res){
        if(res.hasOwnProperty(key)){
        products.push({...res[key],id: key})}
      }
      return products;
    })).subscribe((sportlist)=>{
      this.SportList=sportlist;
    },(err)=>{
      this.errorMessage=err.message;
      
    }
    )
  }
  joinEvent(sportName:string,eventId:string,currentEvent:any){
   
   this.web.put('events/update/'+currentEvent.id,currentEvent)
  }


  fetchEvents(name:string){
    this.isfetching=true
    this.web.get('events/all')
    .pipe(map((res)=>{
      const products=[]
      for (const key in res){
        if(res.hasOwnProperty(key)){
        products.push({...res[key],id: key})}
      }
      return products;
    })).subscribe((products)=>{
      this.AllEvents=products;
      this.isfetching=false
    },(err)=>{
      this.errorMessage=err.message;
      
    }
    )
    
    

  }
  Addevent(event:SportEvent){
    this.web.post('events/add_event',event)
  }
  AddSport(sport:sport){
    this.web.post('categorys/add_category',sport)
  }
deletesport(id){
  this.web.delete('categorys/delete/'+id)
}
 deleteevent(id){
  this.web.delete('events/delete/'+id)
 }
}
