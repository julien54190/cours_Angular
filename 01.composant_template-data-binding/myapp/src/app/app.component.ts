import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nombre = 42;
  title = 'myapp 2';
  bool = true;
  obj = {
    cle: "valeur"
  };

  public suqare(nbr: number): number {
    return nbr * nbr
  }

  public inputType = 'date';

  constructor() {
    setTimeout(() => {
      this.inputType = 'number'
    }, 3000)
  }


  public color = "red";

  public changeColor(color: string): void{
    this.color = color;
  }


  public content = "";

//*ngIf
  public displayButton = true;

  ////////////////////////////////////////////////////////////////
//ngStyle

  public color1 = "green";

  ///////////////////////////////
//ngClass

  public color2 = "blue";

  ////////////////////////////////////////////////////////////////
// *ngFor

  public users: Array<{ nom : string }> = [
    {
      nom : "John",
    },
    {
      nom : "David",
    },
    {
      nom : "Lucas",
    }
  ];

  ///////////////////////////////////////////////////////////////

  //*ngSwitch

public box  ;

}
