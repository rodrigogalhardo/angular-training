import {Component, OnInit} from '@angular/core';

///<reference path="article/article.model.ts"/>
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public articles: Article[];

  ngOnInit() {
    this.articles = [
      new Article('angular2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://angular.io', 2),
      new Article('Ionic framework', 'http://angular.io', 1),
    ];
    console.log(this.articles);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Article Title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
