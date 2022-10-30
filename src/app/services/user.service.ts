import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = ' http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  getAllUser():Observable<User[]> {
  return this.httpClient.get<User[]>(this.url, { observe: "body" }).pipe(
    map((res: User[]) => {
      return res.map((item: User) => {
        return new User(item.id,item.fname,item.lname,item.email,item.sal,item.phone,item.address);
      });
    })
  );
}
}
