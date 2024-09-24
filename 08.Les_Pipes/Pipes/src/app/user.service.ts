import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([
    'Julie',
    'Julien',
    'Louise',
    'Tintin',
    'Milou',
  ])

  public getNames$() {
    return this.users$.asObservable();
  }

  public addName(nom: string) {
    const nomsActuels = this.users$.getValue();
    const nomsMisAJour = [...nomsActuels, nom];
    this.users$.next(nomsMisAJour);
  }
  constructor() { }
}
