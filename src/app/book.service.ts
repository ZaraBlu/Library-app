import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  // Method to add a book with type annotations
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  //Method to get a single book by ID with type annotation
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`)
  }

  //Method to get all books with type annotation
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

}
