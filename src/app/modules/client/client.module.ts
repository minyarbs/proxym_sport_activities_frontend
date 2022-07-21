import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [SectionsComponent, ProfileComponent, EditComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[AuthGuard]
})
export class ClientModule { }
