import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { OrderBook } from '../../actions/order.actions';
import { AddToBasket } from '../../actions/basket.actions';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {
  NotificationResults,
  NotificationAlerts
} from '../../utils/notificationEnums';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: Book;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private notifier: NotifierService
  ) {}

  addToBasket(book: Book) {
    this.store.dispatch(new AddToBasket(book));
    this.notifier.notify(
      NotificationResults.SUCCESS,
      `${NotificationAlerts.BOOK_ADD_TO_BASKET_SUCCESS}: ${book.title}`
    );
  }

  orderBook(book: Book) {
    this.store.dispatch(new OrderBook([{ id: book.id, quantity: 1 }]));
    this.router.navigate(['/order']);
  }
}
