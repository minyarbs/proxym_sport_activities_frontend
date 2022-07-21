import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  
  {path: 'home', component:HomeComponent},
  {path:'register',loadChildren:()=>import('./modules/sign-up/sign-up.module').then(m=>m.SignUpModule)},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'client',loadChildren:()=>import('./modules/client/client.module').then(m=>m.ClientModule)},
  {path:'#',redirectTo:'/home',pathMatch:'full'},
  {path:'login',loadChildren:()=>import('./modules/sign-in/sign-in.module').then(m=>m.SignInModule)},
  {path:'userslist',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
