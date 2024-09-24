import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.resolver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedin(){
    return of(true);
  }

  public getUser(userId: string): Observable<User> {
    return of({
      id: '7',
      name: 'tintin',
    })
  }
}
