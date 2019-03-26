import { basketReducer } from '../reducers/basket.reducer';
import { orderReducer } from '../reducers/order.reducer';
import { Order } from '../interfaces/order';
import { Basket } from '../interfaces/basket';
import { Book } from '../interfaces/book';
import { booksReducer } from '../reducers/books.reducer';

export interface AppState {
  basketReducer: Basket;
  orderReducer: Order;
  booksReducer: Book[];
}

export const store = {
  basketReducer,
  orderReducer,
  booksReducer
};
