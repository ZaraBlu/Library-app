import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  categories: string[] = ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Philosophical'];
  lastAddedBooks: Book[] = [];

  constructor(private bookService: BookService) {


  }
  ngOnInit(): void {

  }
}
