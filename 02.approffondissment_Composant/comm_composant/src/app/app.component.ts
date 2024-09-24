import { Component, ViewEncapsulation, ViewChild, ElementRef, viewChildren, QueryList, ViewChildren } from '@angular/core';
import { FruitComponent } from './fruit/fruit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //encapsulation
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  // leçon 1
  //public fruit: string = '';

  // public addFruit(){
  //   console.log(this.fruit);
    ////////////////
    //}
    // leçon 2
  //   public fruits: string[] = ['fraises', 'kiwi', 'pommes'];
  //   public addFruit(){
  //     this.fruits.push(this.fruit);
  //     this.fruit = '';
  //     console.log(this.fruits)
  //   }

  //   public deleteFruit(fruit: string){
  //     this.fruits = this.fruits.filter((f) => f !== fruit);

  // }

  //Reference Local

//   public fruits: string[] = ['fraises', 'kiwi', 'pommes'];
//   public addFruit(Reference: HTMLInputElement){
//     // console.log(Reference.type);
//     // console.log(Reference.value);
//     this.fruits.push(Reference.value);

//   }

//   public deleteFruit(fruit: string){
//     this.fruits = this.fruits.filter((f) => f !== fruit);

// }

// @ViewChild et @ViewChildren

// public fruits: string[] = ['fraises', 'kiwi', 'pommes'];
//   @ViewChild('myinput', { static: true })
//   public el!: ElementRef<HTMLInputElement>;


//   @ViewChild('fruits', { static: true })
//   public elfruit!: ElementRef<FruitComponent>;
// public addFruit(){
//   console.log(this.elfruit);
//   this.fruits.push(this.el.nativeElement.value);
// }

// public deleteFruit(fruit: string){
//   this.fruits = this.fruits.filter((f) => f !== fruit);

// }

public fruits: string[] = ['fraises'];
  @ViewChild('myinput', { static: true })
  public el: ElementRef<HTMLInputElement> | any;


  @ViewChildren(FruitComponent) public list: QueryList<FruitComponent> | any;
public addFruit(){
  console.log(this.list)
  this.fruits.push(this.el.nativeElement.value);
}

public deleteFruit(fruit: string){
  this.fruits = this.fruits.filter((f) => f !== fruit);

}
}
