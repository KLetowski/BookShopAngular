import { Action } from '@ngrx/store';
import { OrderBookModel } from '../interfaces/order';

export enum OrderActionTypes {
  OrderBooks = '[Order] Order Books'
}

export class OrderBook implements Action {
  readonly type = OrderActionTypes.OrderBooks;

  constructor(public payload: OrderBookModel[]) {}
}

export type OrderActions = OrderBook;
