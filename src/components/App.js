import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
