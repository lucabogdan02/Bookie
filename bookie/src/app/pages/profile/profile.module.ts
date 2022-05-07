import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatButtonModule } from '@angular/material/button';

import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule
  ]
})
export class ProfileModule { }
