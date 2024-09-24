import { Component, OnInit } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

//Pipe
interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  //pipe
  user: BehaviorSubject<User> = new BehaviorSubject<User>({
    firstName: '',
    lastName: ''
  });
  public fullname?: string;



  ngOnInit(): void {
    //pipe
    //faire comme si call HTTP
    this.user.next({
      firstName: 'John',
      lastName: 'Doe'
    })

    //const s3 = this.user.subscribe((user: User) => console.log(user));
    const s3 = this.user.pipe(
      filter((user: User) => true), //filter pour true ou false pour voir si des info sont bien rentrer avant le map
      map((user: User) => {
        return `${user.firstName} ${ user.lastName}`;
      })
    ).subscribe((fullname: string) => console.log(fullname));



    //subject
    const subject = new BehaviorSubject<number>(0);

    const s1 = subject.subscribe((x) => {
      console.log('[s1] : ', x );

    })
    const s2 = subject.subscribe((x) => {
      console.log('[s2] : ', x );

    })

    // subject.next(1);

    // s1.unsubscribe();

    // subject.next(2); // [s2] :  2
  }
}
