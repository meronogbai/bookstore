import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, removeBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = filter => {
    changeFilter(filter);
  };
  return (
    <div>
      <CategoryFilter changeFilter={handleFilterChange} />
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
          {(filter === 'All' ? books : books.filter(book => book.category === filter))
            .map(book => (
              <Book book={book} key={book.id} removeBook={handleRemoveBook} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
