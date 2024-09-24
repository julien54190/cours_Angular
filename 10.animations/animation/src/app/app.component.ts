import { state, style, trigger } from '@angular/animations';
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
      }))
    ])
  ]
})
export class AppComponent {
  public state = "normal";
}
