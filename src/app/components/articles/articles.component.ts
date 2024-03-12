import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles = [
    { id: 1, author: 'Tom Kennedy', imageSrc: '/assets/ArticleImage1.png', date: 'Feb 23, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 2, author: 'Tom Kennedy', imageSrc: '/assets/ArticleImage2.png', date: 'Feb 10, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 3, author: 'Tom Kennedy', imageSrc: '/assets/ArticleImage3.png', date: 'Feb 02, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' }
  ]
}
