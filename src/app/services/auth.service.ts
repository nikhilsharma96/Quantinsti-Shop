import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  users=[
    {username: 'nikhil',password: 'nikhil'},
    {username: 'ironman',password:'ironman'},
    {username: 'conman',password: 'conman'}
  ];
  isUserLoggedIn:boolean = false;
  constructor() { }

  login(username:string, password:string):Observable<any> {
    this.users.forEach((data)=>{
      if(data.username === username && data.password === password){
        this.isUserLoggedIn=true;
        localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn ? 'true': 'false');
      }
    })
    return of(this.isUserLoggedIn).pipe(
      delay(100))
  }

  logout() {
    this.isUserLoggedIn=false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
