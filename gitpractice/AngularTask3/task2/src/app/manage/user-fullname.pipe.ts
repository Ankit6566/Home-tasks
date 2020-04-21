import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../userModel';

@Pipe({
  name: 'userFullname'
})
export class UserFullnamePipe implements PipeTransform {

  transform(user:User): string {
    return user.firstName + " "+ user.lastName;
  }

}
