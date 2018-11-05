import { BOOKS_RECEIVED } from '../actions/booksAction';

export default function(state = [], action) {
  switch (action.type) {
    case BOOKS_RECEIVED:
      return action.books;
    default:
      return state;
  }
}
  