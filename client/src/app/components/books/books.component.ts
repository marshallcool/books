import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe(books => this.books = books);
  }

}
