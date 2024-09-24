import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  public aliments: string[] = [];

  constructor(public LogService: LogService){}

  public addOne(aliment: string): void {
    this.aliments.push(aliment);
    this.LogService.log('Aliment added')
  }

  public removeOne(index: number): void {
    this.aliments.splice(index, 1);
    this.LogService.log('Aliment removed')
  }

}
