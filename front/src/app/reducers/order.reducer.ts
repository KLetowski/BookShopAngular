import { Order } from '../interfaces/order';
import { OrderBook, OrderActionTypes } from '../actions/order.actions';

const initialState: Order = {
  books: [],
  address: '',
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: 0,
  zipCode: ''
};

export function orderReducer(state = initialState, action: OrderBook): Order {
  switch (action.type) {
    case OrderActionTypes.OrderBooks:
      state.books = action.payload;
      return {
        ...state
      };
    default:
      return state;
  }
}
