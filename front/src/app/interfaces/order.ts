import { Book } from './book';

export interface OrderBookModel {
  id: number;
  quantity: number;
}

export interface Order {
  books: OrderBookModel[];
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  address: string;
  zipCode: string;
}
