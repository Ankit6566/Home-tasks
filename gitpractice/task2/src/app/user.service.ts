import { Injectable } from '@angular/core';
import {User} from './userModel'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList:User[]= [];
    constructor(){
        this.usersList.push(new User("101","ankit","madaan",30,true));
        this.usersList.push(new User("102","parveen","yetelli",25,true));
        this.usersList.push(new User("103","harman","bajwa",40,false));
        this.usersList.push(new User("104","sachin","sharma",20,true));
        this.usersList.push(new User("105","jitu","bhati",18,false));
    }
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
