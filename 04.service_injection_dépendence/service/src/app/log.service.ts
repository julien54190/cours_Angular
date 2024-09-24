import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public log(message: string) {
    console.log('[log] : ', message);

  }
}
