import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {path: '', 
  canActivate: [AuthGuard], 
  children: [
      { path: '', component: SectionsComponent },
      {path:'profile',component:ProfileComponent},
      {path:'edit',component:EditComponent}
      
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
