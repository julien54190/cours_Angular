import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public id?: string | null;
  public name?: string | null;
  public details?: string | null;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id')
      //this.name = paramMap.get('name') utilisation QueryParam

    });
    this.activatedRoute.queryParamMap.subscribe((ParamMap: ParamMap) => {
      this.name = ParamMap.get('name')
      this.details = ParamMap.get('details')
    });
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }
}

