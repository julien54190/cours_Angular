import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  // public nom = 'Jean';
  // public date1= new Date()
  // public date2 = Date.now()

  // public names = [
  //   'Julie',
  //   'Julien',
  //   'Louise',
  //   'Tintin',
  //   'Milou',
  // ]

  //public names?: string[]
  public names$: Observable<string[]> | undefined;

  public search = ''

  constructor(private userService: UserService){}



  ngOnInit(): void {
    this.names$ = this.userService.getNames$();
  }
   //ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  public addName(nom: string) {
    this.userService.addName(nom);}

  ngOnDestroy(): void {}
}
