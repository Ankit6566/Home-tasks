import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { User } from 'src/app/userModel';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges {
 @Input() module:string;
 userArray: User[];
constructor(private users: UserService){}
 

  ngOnChanges(){
    if (this.module === 'active') {
      this.userArray=this.users.usersList.filter(user=>!user.isDeleted);
    }else if( this.module === 'deleted'){
      this.userArray=this.users.usersList.filter(user=>user.isDeleted);
    } else {
      this.userArray = this.users.usersList;
    }
    
  }
}
