import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constantfile';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { User } from 'src/app/userModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constants;
  user: User;
  EditForm:FormGroup=new FormGroup({
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    age:new FormControl('',Validators.required)
  });
  constructor(private users: UserService, private route: ActivatedRoute,private http: HttpService) {}

  ngOnInit() {
    this.constants = AppConstants;
    let id = this.route.snapshot.params['id'];
     this.http.getUserByID(id).subscribe((user)=>{
       this.user=user as any;
     })
    this.route.params.subscribe(params => {
      id = params['id'];
      this.http.getUserByID(id).subscribe((user)=>{
        this.user=user as any;
      })
    });
  }
  onSubmit(){
    this.http.updateUser({
      ...this.EditForm.value,
      id:this.user.id
    });
    this.EditForm.reset();
  }
}
