import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector:'[appColor]'
})
export class ColorDirective implements OnInit {
  @HostListener('mouseenter', ['$event']) private surligne(event: MouseEvent){
    console.log('event: ', event);
    //this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.color = this.surligneColor?.color;
    this.el.nativeElement.style.backgroundColor = this.surligneColor?.backgroundColor;
  }

  //@Input('color') public surligneColor?: string;
  //@Input('appColor') public surligneColor?: string;
  @Input('appColor') public surligneColor?: {
    color: string;
    backgroundColor: string;
  }

  // @HostListener('mouseleave') private normal(){
  //   this.el.nativeElement.style.color = '';
  //}
  // @HostListener('window:click', ['$event']) private test(event: MouseEvent){
  //   console.log(event);
//}

  //@Input()  @HostBinding('class') public class:any;

  //@HostBinding('attr.role') public role:any;

  //@HostBinding('style.backgroundColor') public color:any;


  constructor(private el: ElementRef<any>) {}

  ngOnInit(): void {
    //this.el.nativeElement.style.color = '';
    //console.log(this.class);
    //this.class = 'test'

    //this.role = "admin"

    //this.color = "tomato"
  }
}
