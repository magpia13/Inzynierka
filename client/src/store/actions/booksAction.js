import axios from 'axios';
import errorAction from './errorAction';
export const BOOK_RECEIVED = 'BOOK_RECEIVED';
export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';

export const booksReceivedAction = (books) => {
  console.log(books);
  return {
    type: BOOKS_RECEIVED,
    books
  };
}

export const bookReceivedAction = (book) => {
  return {
    type: BOOK_RECEIVED,
    book
  };
}
export const createBook = (r) => dispatch => {
  console.log(r);
  let formData = new FormData();
  formData.append('title', r.title);
  formData.append('author', r.author);
  formData.append('description', r.description);
  formData.append('isbn', r.isbn);
  formData.append('image', r.image);
    console.log(formData);
  axios.post('/api/books/', formData, 'multipart/form-data')
  .then(() => dispatch(getBooksList()))
    .catch(err => dispatch(errorAction(err.response.data)))
}

export const getBooksList = () => dispatch => {
  axios.get('/api/books/')
  .then(e => dispatch(booksReceivedAction(e.data)))
  .catch(err => console.log(err))
 }
// export const getBook = (id) => dispatch => {
//   axios.get('/api/books/'+id+'/')
//   .then(e => dispatch(bookReceivedAction(e.data)))
//   .catch(err => console.log(err))
// }
export default {
 createBook,
 getBooksList,
}   