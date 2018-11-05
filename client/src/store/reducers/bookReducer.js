import { BOOK_RECEIVED } from '../actions/booksAction';

export default function(state = null, action) {
  switch (action.type) {
    case BOOK_RECEIVED:
      return action.book;
    default:
      return state;
  }
}
  