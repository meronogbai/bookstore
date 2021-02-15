import { combineReducers } from 'redux';
import booksReducer from './books';

export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

const reducer = combineReducers({
  books: booksReducer,
});

export default reducer;
