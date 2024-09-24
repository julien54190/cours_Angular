import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {}


  public redirection(){
    //this.router.navigate(['users'])
    this.router.navigateByUrl('users')
  }

}
