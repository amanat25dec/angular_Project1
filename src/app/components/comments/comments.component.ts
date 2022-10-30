import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comments[]=[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getAllcomments().subscribe((Response:Comments[]) => {
      this.comments = Response;
    });
  }
}
