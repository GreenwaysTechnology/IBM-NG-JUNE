import { Injectable } from '@angular/core';
import {USERS} from '../mockdata/users';
import { Observable,of, from } from 'rxjs';
import {filter,map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' //UserModule
})
export class UserService {

  constructor(private http:HttpClient) { }

  //users 
  public findAll():Observable<Array<any>>{
    return of(USERS);
  }
  //find even even users : Data processing
  public filterUsers(id:number):Observable<any>{
    //filter logic
    return from(USERS).pipe(
       map(users=>users),
       filter((users,index)=> users.id === id)
     );

  }
  //FETCH DATA FROM rest end points
  public fetchPhotos():Observable<any[]>{
    const url = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get<any[]>(url)
      .pipe(
       // catchError(this.handleError('getHeroes', []))
      );
  }

}
