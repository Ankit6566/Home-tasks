import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { User } from 'src/app/userModel';
import { UserService } from 'src/app/user.service';
import {AppConstants} from 'src/app/constantfile';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges {
 @Input() module:string;
 userArray: User[];
 constants;
constructor(private users: UserService){
}

  ngOnChanges(){
    this.constants=AppConstants;
    if (this.module === this.constants.USER_ACTIVE) {
      this.userArray=this.users.usersList.filter(user=>!user.isDeleted);
    }else if( this.module === this.constants.USER_DELETE){
      this.userArray=this.users.usersList.filter(user=>user.isDeleted);
    } else {
      this.userArray = this.users.usersList;
    }
    
  }
}
