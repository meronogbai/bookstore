import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';

const initialState = [
  {
    id: Math.random() * 10,
    title: 'The Hitchhiker\'s Guide to The Galaxy',
    category: 'Sci-Fi',
  },
  {
    id: Math.random() * 10,
    title: 'Frankenstein',
    category: 'Horror',
  },
  {
    id: Math.random() * 10,
    title: 'Algorithms Textbook',
    category: 'Learning',
  },
];
const store = createStore(booksReducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
