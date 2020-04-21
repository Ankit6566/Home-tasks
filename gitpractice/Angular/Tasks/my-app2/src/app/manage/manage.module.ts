import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes:Routes=[
  {path:'', component: ManageComponent , 
  children:[{path:'details/:id', component: UserDetailsComponent}]}
]


@NgModule({
  declarations: [UserDetailsComponent, ManageComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class ManageModule { }
