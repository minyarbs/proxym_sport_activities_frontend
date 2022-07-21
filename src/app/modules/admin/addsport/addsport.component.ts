import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventManagService } from 'src/app/services/event-manag.service';

@Component({
  selector: 'app-addsport',
  templateUrl: './addsport.component.html',
  styleUrls: ['./addsport.component.css']
})
export class AddsportComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(public manag:EventManagService) { 
 
  }
  
  ngOnInit(): void {
    this.reactiveForm= new FormGroup({
      
      categoryname: new FormControl(null, Validators.required),
      id:new FormControl(null),
      image:new FormControl(null),
    })
  }

  submit(){
this.manag.AddSport(this.reactiveForm.value)
alert('sport successfully added')
  }
  delete(){
    this.manag.deletesport(this.reactiveForm.value.id)
  }

}
