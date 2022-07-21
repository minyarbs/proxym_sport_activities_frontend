import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserslistComponent } from './components/userslist/userslist.component';
import { SporteventsComponent } from './sportevents/sportevents.component';
import { AddsportComponent } from './addsport/addsport.component';

@NgModule({
  declarations: [

  
    UserslistComponent,
        SporteventsComponent,
        AddsportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AdminModule { }
