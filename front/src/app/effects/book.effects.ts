import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BooksService } from '../services/books.service';
import {
  BooksActionTypes,
  FetchBooks,
  FetchBooksSuccess
} from '../actions/books.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ResponseBody } from '../interfaces/response-body';
import { Book } from '../interfaces/book';
import { BooksListMetadata } from '../interfaces/books-list-metadata';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private booksService: BooksService) {}

  @Effect()
  fetchBooks = this.actions.pipe(
    ofType(BooksActionTypes.FetchBooks),
    mergeMap((action: FetchBooks) =>
      this.booksService
        .fetchBooks(action.payload)
        .pipe(
          map(
            (response: ResponseBody<Book[], BooksListMetadata>) =>
              new FetchBooksSuccess(response)
          )
        )
    )
  );
}
