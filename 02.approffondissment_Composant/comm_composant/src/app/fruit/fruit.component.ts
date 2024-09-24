import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
})
export class FruitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy //hook
{
  @Input() public fruit?: string;

  //@output
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();

  //ContentChild
  //@ViewChild('ref') public el: ElementRef<HTMLParagraphElement> | any
  //@ContentChild('ref') public el: ElementRef<HTMLParagraphElement> | any
  @ViewChild('ref') public el: ElementRef<HTMLButtonElement> | any

  constructor(){
    console.log('constructor');
    //console.log(this.fruit); ici undifined car fruit est pas encore defini


  }
  public deleteFruit(){
    //console.log(this.el)
    this.deleteF.emit(this.fruit);
  }

  ngOnChanges(SimpleChanges: SimpleChanges): void {
    console.log('ngOnChanges : ', SimpleChanges);

  }

  ngOnInit(): void {
      console.log('ngOnInit')
      //console.log(this.fruit); ici fruit sera fraise car il a ete charger

  }

  ngDoCheck(): void {
      console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
      console.log(this.el);

  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy');
  }

}
