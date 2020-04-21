import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageComponent } from './manage.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserFullnamePipe } from './user-fullname.pipe';
import { UserStatusPipe } from './user-status.pipe';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'', component: ManageComponent , 
  children:[{path:'details/:id', component: UserDetailsComponent},
  { path: 'createuser', component: CreateUserComponent },
  { path: 'edit/:id', component: EditUserComponent }
]}
]


@NgModule({
  declarations: [UserDetailsComponent, ManageComponent, UserFullnamePipe, UserStatusPipe,CreateUserComponent,EditUserComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes),ReactiveFormsModule
  ]
})
export class ManageModule { }
