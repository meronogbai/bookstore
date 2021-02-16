import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const handleClick = () => {
    removeBook(book);
  };
  return (
    <div className="book flex jc-between">
      <div>
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">John Smith</div>
        <div className="book-footer flex a-center">
          <div>Comments</div>
          <div className="line-2" />
          <button type="button" onClick={handleClick}>Remove</button>
          <div className="line-2" />
          <div>Edit</div>
        </div>
      </div>
      <div className="flex a-center">
        <img src="https://i.imgur.com/w0r3gDu.png" alt="percentage" />
        <div className="line-2" />
        <div>
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter">Chapter 17</div>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
