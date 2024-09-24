import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  public subscription?: Subscription;

  ngOnInit(): void {
    const observable = new Observable((observer: Observer<any>) => {

      const data = 2;
      observer.next(data);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      //setTimeout(() => observer.next(5), 3000)
      //observer.complete(); voir OnDestroy
      //observer.error(new Error('oops'));
      observer.next(6);

    });

  //   const observer = {
  //     next: (a: any) => console.log('[next] :' , a),
  //     complete: () => console.log('[complete]'),
  //     error: (a: any) => console.log(['[error'], a)
  // };

  //observable.subscribe(observer);

  // observable.subscribe({
  //   next: (a: any) => console.log('[next] :' , a),
  //   //complete: () => console.log('[complete]'), pas obligatoire car rien a recuperer
  //   error: (a: any) => console.log(['[error'], a)
  // });

  this.subscription = observable.subscribe(
    (x) => {
      console.log(x);
    },
    (x) => {
      console.log(x);
    }
    // () => {
    //   console.log('completed');

    // }

    )
  }
  //pour remplacer la fonction complete.
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}


