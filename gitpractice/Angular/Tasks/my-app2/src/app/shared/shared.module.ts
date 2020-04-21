import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ UserComponent, UserListComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[UserListComponent,CommonModule]
})
export class SharedModule { }
