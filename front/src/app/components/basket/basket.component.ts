import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { Basket } from '../../interfaces/basket';
import { OrderBook } from '../../actions/order.actions';
import { Book } from '../../interfaces/book';
import { Router } from '@angular/router';
import { OrderBookModel } from '../../interfaces/order';
import { order } from '../../utils/routing';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  basket: Basket;
  subscription = new Subscription();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.subscription = this.store
      .select('basketReducer')
      .subscribe((basket: Basket) => {
        this.basket = basket;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToOrder() {
    const orderBook: OrderBookModel[] = this.basket.books.map((book: Book) => {
      return {
        id: book.id,
        quantity: book.quantity
      };
    });

    this.store.dispatch(new OrderBook(orderBook));
    this.router.navigate([`/${order}`]);
  }
}
