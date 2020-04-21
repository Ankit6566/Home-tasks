import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/userModel';
import {AppConstants} from 'src/app/constantfile';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constants;
  @Input() user: User;
  @Input() module: string;

  constructor(private route: ActivatedRoute, private users: UserService,private http:HttpService) {}
ngOnInit(){
  this.constants= AppConstants;
}
  active() {
    this.http.activateUser(this.user);
  }
  delete() {
    this.http.deactivateUser(this.user);
  }

}
