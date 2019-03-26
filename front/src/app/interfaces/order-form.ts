import { Order } from './order';

export interface OrderForm extends Order {
  addressForm: {
    street: string;
    houseNumber: string;
  };
}
