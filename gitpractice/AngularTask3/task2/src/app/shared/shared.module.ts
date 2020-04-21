import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { FilterUsersPipe } from './filter-users.pipe';



@NgModule({
  declarations: [ UserComponent, UserListComponent, FilterUsersPipe],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[UserListComponent,CommonModule]
})
export class SharedModule { }
