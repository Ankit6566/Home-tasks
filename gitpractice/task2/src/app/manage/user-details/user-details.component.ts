import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/userModel';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private users: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.user = this.users.getUser(id);

    this.route.params.subscribe(params => {
      id = params['id'];
      this.user = this.users.getUser(id);
    });
  }
}
