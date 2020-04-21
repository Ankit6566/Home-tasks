import { Injectable } from '@angular/core';
import { User } from 'src/app/userModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList:User[]= [{
      id:"101",
      firstName:"ankit",
      lastName:"madaan",
      isDeleted:true,
      age:30,
      password:"ankit123"
  },
  {
    id:"102",
      firstName:"parveen",
      lastName:"yetelli",
      isDeleted:true,
      age:30,
      password:"parveen123"
  },
  {
    id:"103",
      firstName:"jitu",
      lastName:"bhatti",
      isDeleted:false,
      age:30,
      password:"jitu123"
  },
  {
      id:"104",
      firstName:"anubhav",
      lastName:"singh",
      isDeleted:true,
      age:30,
      password:"ankit123"
    },
      {
       id:"105",
      firstName:"harman",
      lastName:"bajwa",
      isDeleted:false,
      age:30,
      password:"anubhav123"
    },
    {
        id:"106",
        firstName:"bhanwar",
        lastName:"singh",
        isDeleted:true,
        age:30,
        password:"bhanwar123"
      }];
    getUser(id:string){
        return this.usersList.find(user=>user.id===id); 
    }

    activateUser(id:string){
        let i=this.usersList.findIndex(user=>user.id===id)
        this.usersList[i].isDeleted=false;
    }

    deactivateUser(id:string){
        let i=this.usersList.findIndex(user=>user.id===id)
        this.usersList[i].isDeleted=true;
    }
}
