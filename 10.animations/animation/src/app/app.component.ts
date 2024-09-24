import { animate, group, keyframes, query, stagger, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
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
      //transition('normal <=> wild', animate(1000)),
      //transition(':enter', animate(1000)),
      //transition(':enter', animate("1s 1s ease-in")), // animate("durée commancement style animation"))
      // transition(':enter', [
      //   style({
      //     backgroundColor: 'blue',
      //   }),
      //   animate(400)
      // ]),

      //transition(' * => *', animate(1000)), * fait réference a tout les états.
      //transition(' void => normal', animate(1000)), on part de rien vers normal sois l'animation s'enclanche direct pour afficher normal.
      //transition(' void => *', animate(1000)), == transition(':enter', animate(1000))
      //transition(' * => void', animate(1000)), == transition(':leave', animate(1000))
      //transition('wild => normal', animate(200))

      //transition('normal => wild', animate(2000,
      //   keyframes([
      //   style({ backgroundColor: "yellow", offset: 0}),
      //   style({ backgroundColor: "green", offset: 0.2}),
      //   style({ backgroundColor: "blue", offset: 0.4}),
      //   style({ backgroundColor: "orange", offset: 0.6}),
      //   style({ backgroundColor: "teal", offset: 0.8}),
      // ])
      //))

      transition("normal => wild",
      group([
        animate(1000, style ({
          borderRadius: '50%'
        })),
        animate(5000, style({
          backgroundColor: "red"
        })),
      ])
      )
    ]),
    trigger("list", [
      transition(":enter", query('li', [
        style({
          opacity: 0,
          transform: 'translateX( -10px)'
        }),
        stagger(-300, animate(2000))
      ])),
      transition(":leave",
      query('li', [
        stagger(-300, animate(2000,
          style({
            opacity: 0,
            transform: 'translateX(10px)'
          }),
          ))
      ]))
    ] )
  ]
})
export class AppComponent {
  //public state = "wild";
  public state = "normal";

  public display = true;

  public toggle(event: AnimationEvent) {
    if (event.phaseName === 'done') {
      this.display = !this.display;
    }

  }

}
