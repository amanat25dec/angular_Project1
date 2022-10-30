import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  users: any;
  ngOnInit(): void {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(url).subscribe((result: any) => {
      console.log(result);
      this.users = result;
    });
  }
}
