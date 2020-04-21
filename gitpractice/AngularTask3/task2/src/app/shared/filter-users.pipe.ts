import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/userModel';
@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(usersArray : User[] , module: string) : User[]{
    if (module === 'active') {
        return  usersArray.filter(user => !user.isDeleted);
      } else if (module === 'deleted') {
        return usersArray.filter(user => user.isDeleted);
      }else return usersArray;
}

}
