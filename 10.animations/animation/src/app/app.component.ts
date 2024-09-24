import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('square', [
      state('normal', style({
        backgroundColor: 'white',
        border: '2px solid #444',
        borderRadius: '0px'
      })),
      state('wild', style({
        backgroundColor: 'red',
        border: 'none',
        borderRadius: '50%'
      })),
      transition('normal <=> wild', animate(1000)),
      //transition(':enter', animate(1000)),
      //transition(':enter', animate("1s 1s ease-in")), // animate("durée commancement style animation"))
      transition(':enter', [
        style({
          backgroundColor: 'blue',
        }),
        animate(400)
      ]),

      //transition(' * => *', animate(1000)), * fait réference a tout les états.
      //transition(' void => normal', animate(1000)), on part de rien vers normal sois l'animation s'enclanche direct pour afficher normal.
      //transition(' void => *', animate(1000)), == transition(':enter', animate(1000))
      //transition(' * => void', animate(1000)), == transition(':leave', animate(1000))
      //transition('wild => normal', animate(200))
    ])
  ]
})
export class AppComponent {
  public state = "wild";
}
