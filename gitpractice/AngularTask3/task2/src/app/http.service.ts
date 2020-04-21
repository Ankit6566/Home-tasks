import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/userModel';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private usersAPI = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.usersAPI);
  }

  getUserByID(id: string) {
    return this.http.get(this.usersAPI + '/' + id);
  }

  deactivateUser(user: User): void {
    this.http.put(this.usersAPI + '/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: true
    }).subscribe();
  }

  activateUser(user:User):void{
    this.http.put(this.usersAPI + '/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: false
    }).subscribe();
  }
  updateUser(user : Partial<User>) {
    this.http.put(this.usersAPI + '/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: false
    }).subscribe();
  }

  createNewUser(user:User) : void{
    this.http.post(this.usersAPI+'/',user).subscribe();
  }
}

