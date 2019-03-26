import { Book } from '../interfaces/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';
import { BooksListMetadata } from '../interfaces/books-list-metadata';

export interface BooksReducer {
  books: Book[];
  metadata: BooksListMetadata;
  currentPageLoaded: number;
}

const initialState: BooksReducer = {
  books: [],
  metadata: {} as BooksListMetadata,
  currentPageLoaded: 0
};

export function booksReducer(
  state = initialState,
  action: BooksActions
): BooksReducer {
  switch (action.type) {
    case BooksActionTypes.FetchBooksSuccess:
      state.books.push(...action.payload.data);
      state.metadata = action.payload.metadata;
      state.currentPageLoaded++;
      return {
        ...state
      };
    default:
      return state;
  }
}
