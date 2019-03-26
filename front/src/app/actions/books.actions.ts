import { Action } from '@ngrx/store';
import { Book } from '../interfaces/book';
import { ResponseBody } from '../interfaces/response-body';
import { BooksListMetadata } from '../interfaces/books-list-metadata';

export enum BooksActionTypes {
  FetchBooks = '[Books] Fetch Books',
  FetchBooksSuccess = '[Books] Fetch Books Success'
}

export class FetchBooks implements Action {
  readonly type = BooksActionTypes.FetchBooks;

  constructor(public payload: number = 1) {}
}

export class FetchBooksSuccess implements Action {
  readonly type = BooksActionTypes.FetchBooksSuccess;

  constructor(public payload: ResponseBody<Book[], BooksListMetadata>) {}
}

export type BooksActions = FetchBooks | FetchBooksSuccess;
