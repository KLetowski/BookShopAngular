import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../interfaces/book';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BooksListMetadata } from '../../interfaces/books-list-metadata';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/store';
import { FetchBooks } from '../../actions/books.actions';
import { BooksReducer } from '../../reducers/books.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  metadata: BooksListMetadata;
  allPages: number;
  currentPageLoaded = 0;
  subscription = new Subscription();

  constructor(
    private ngxService: NgxUiLoaderService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.ngxService.start();

    this.subscription = this.store
      .pipe(select('booksReducer'))
      .subscribe((booksState: BooksReducer) => {
        const { books, metadata } = booksState;

        this.currentPageLoaded = booksState.currentPageLoaded;
        this.books = books;
        this.metadata = metadata;
        this.allPages = Math.ceil(
          metadata.totalRecords / metadata.recordsPerPage
        );
        this.ngxService.stop();
      });

    if (this.currentPageLoaded === 0) {
      this.fetchBooks();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleBookSearch(event: KeyboardEvent) {
    const { value } = event.currentTarget as HTMLInputElement;

    this.store
      .pipe(select('booksReducer'))
      .subscribe((booksState: BooksReducer) => {
        this.books = this.filterBookByExpression(booksState.books, value);
      });
  }

  filterBookByExpression = (books: Book[], searchExpression: string): Book[] =>
    books.filter((book: Book) =>
      this.isSearchExpressionInList(book, searchExpression)
    );

  isSearchExpressionInList(book: Book, value: string): boolean {
    return Object.values(book).find((bookValue: string | number) => {
      bookValue = bookValue.toString().toLowerCase();
      return bookValue.includes(value.trim().toLowerCase());
    });
  }

  fetchBooks(page = 1): void {
    if (this.currentPageLoaded < this.allPages || Number.isNaN(this.allPages)) {
      this.store.dispatch(new FetchBooks(page));
    }
  }
}
