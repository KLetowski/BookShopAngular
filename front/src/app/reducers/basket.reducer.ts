import { BasketActions, BasketActionTypes } from '../actions/basket.actions';
import { Basket } from '../interfaces/basket';
import { Book } from '../interfaces/book';
import { OrderBookModel } from '../interfaces/order';

const initialState: Basket = {
  books: []
};

export function basketReducer(
  state = initialState,
  action: BasketActions
): Basket {
  switch (action.type) {
    case BasketActionTypes.AddToBasket:
      state.books = updateBooksInBasket(state.books, action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
}

function updateBooksInBasket(
  booksInBasket: OrderBookModel[],
  newBookInBasket: OrderBookModel
): Book[] {
  let isInBasket = false;
  let filteredBasket = [];

  filteredBasket = booksInBasket.filter((book: OrderBookModel) => {
    if (book.id === newBookInBasket.id) {
      book.quantity++;
      isInBasket = true;
    }
    return book;
  });

  if (!isInBasket) {
    newBookInBasket.quantity = 1;
    filteredBasket.push(newBookInBasket);
  }
  return filteredBasket;
}
