import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { ManagusersService } from 'src/app/services/managusers.service';
import { AddsportComponent } from './addsport/addsport.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { SporteventsComponent } from './sportevents/sportevents.component';

const routes: Routes = [
    {path: '', 
    canActivate: [AdminGuard], 
    children: [
        { path: '', component: UserslistComponent },
        {path:'editsport',component:SporteventsComponent},
        {path:'addsport',component:AddsportComponent}
        
    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ManagusersService]
})
export class AdminRoutingModule { }
