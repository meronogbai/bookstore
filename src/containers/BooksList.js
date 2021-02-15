import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} removeBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
