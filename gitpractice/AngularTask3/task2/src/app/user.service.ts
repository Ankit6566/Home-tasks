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
      password:"ankit123",updatedAt:"2020"
  },
  {
    id:"102",
      firstName:"parveen",
      lastName:"yetelli",
      isDeleted:true,
      age:30,
      password:"pp",updatedAt:"2020"
  },
  {
    id:"103",
      firstName:"jitu",
      lastName:"bhatti",
      isDeleted:false,
      age:30,
      password:"pp",updatedAt:"2020"
  },
  {
      id:"104",
      firstName:"anubhav",
      lastName:"singh",
      isDeleted:true,
      age:30,
      password:"pp",updatedAt:"2020"
    },
      {
       id:"105",
      firstName:"harman",
      lastName:"bajwa",
      isDeleted:false,
      age:30,
      password:"pp",updatedAt:"2020"},
    {
        id:"106",
        firstName:"bhanwar",
        lastName:"singh",
        isDeleted:true,
        age:30,
        password:"pp",updatedAt:"2020"
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
