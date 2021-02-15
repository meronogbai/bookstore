import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Learning');
  const handleTitleChange = e => setTitle(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    createBook({
      id: Math.floor(Math.random() * 10),
      title,
      category,
    });
    setTitle('');
    setCategory('Learning');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </label>
      <select name="category" id="category" value={category} onChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <option value={category} key={String(index)}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
