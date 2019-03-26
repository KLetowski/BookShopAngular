import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../interfaces/book';
import { getBooks } from '../utils/apiUrls';
import { Observable } from 'rxjs';
import { ResponseBody } from '../interfaces/response-body';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  fetchBooks(page: number = 1): Observable<ResponseBody<Book[]>> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<ResponseBody<Book[]>>(getBooks, {
      params
    });
  }
}
