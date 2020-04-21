import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import {AppConstants} from 'src/app/constantfile';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
constants;
ngOnInit(){
  this.constants = AppConstants;
}
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl('',Validators.required)
 });
  constructor(private http: HttpService) {}
  onSubmit() {
    this.http.createNewUser(this.userForm.value);
    this.userForm.reset();
  }
}
