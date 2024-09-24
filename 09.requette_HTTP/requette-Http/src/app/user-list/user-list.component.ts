import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users?: User[];

  constructor(private httpService: HttpClient) {}

  ngOnInit() {

    this.httpService.get<User[]>('https://restapi.fr/api/angularuser')
  .subscribe((users: User[]) => {
      this.users = users;
      console.log(users);

    })
  }
}
