import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'The Hitchhiker\'s Guide to The Galaxy',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Frankenstein',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Algorithms Textbook',
      category: 'Learning',
    },
  ],
  filter: 'All',
};
const store = createStore(reducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
