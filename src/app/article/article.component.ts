import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article

  constructor() {
    //this.article = new Article('Angular 2', 'https://angular.io', 3);
  }

  ngOnInit(): void {
  }

  voteUp() {
    this.article.voteUp();
  }

  voteDown() {
    this.article.voteDown();
  }
}
