import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: User;
  @Input() module: string;

  constructor(private route: ActivatedRoute, private users: UserService) {}

  active() {
    this.users.activateUser(this.user.id);
  }
  delete() {
    this.users.deactivateUser(this.user.id);
  }

}
