import {
  Component,
  Input,
  HostBinding,
  OnInit
} from '@angular/core';
/**
 * Models
 * */
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  articles: Article[]; // <= component property


  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.votesDown();
    return false;
  }
}
