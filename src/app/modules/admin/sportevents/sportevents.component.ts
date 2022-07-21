import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EventManagService } from 'src/app/services/event-manag.service';

@Component({
  selector: 'app-sportevents',
  templateUrl: './sportevents.component.html',
  styleUrls: ['./sportevents.component.css']
})
export class SporteventsComponent implements OnInit {
reactiveForm: FormGroup;
  constructor(public manag:EventManagService) { 
 
  }
  
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      
      eventname: new FormControl(null, Validators.required),
      id: new FormControl(null, Validators.required),
      place: new FormControl(null, ),
      desc: new FormControl(null, ),
      startdate: new FormControl(null, ),
      enddate: new FormControl(null,),
      price: new FormControl(null),
      maxnum: new FormControl(null),
      categoryname: new FormControl(null, Validators.required),
    })
  }

  submit(){
this.manag.Addevent(this.reactiveForm.value)
alert('event successfully added')
  }
  delete(){
    this.manag.deleteevent(this.reactiveForm.value.id)
  }

}
