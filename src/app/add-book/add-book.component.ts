import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  book: Book = new Book();

  constructor(private bookService: BookService) {

  }

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(() => {
      console.log('Book Added Successfully!')
    })
  }

}
