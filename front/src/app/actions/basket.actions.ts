import { Action } from '@ngrx/store';
import { OrderBookModel } from '../interfaces/order';

export enum BasketActionTypes {
  AddToBasket = '[Basket] Add Book To Basket'
}

export class AddToBasket implements Action {
  readonly type = BasketActionTypes.AddToBasket;

  constructor(public payload: OrderBookModel) {}
}

export type BasketActions = AddToBasket;
