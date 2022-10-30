import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {}

  getAllcomments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(this.url);
  }
}
