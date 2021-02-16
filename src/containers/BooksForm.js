import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleTitleChange = e => { setTitle(e.target.value); };
  const handleCategoryChange = e => { setCategory(e.target.value); };
  const handleSubmit = e => {
    e.preventDefault();
    createBook({
      id: Math.floor(Math.random() * 10000),
      title,
      category,
    });
    setTitle('');
    setCategory('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="line" />
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="Book Title" required />
      <select name="category" id="category" value={category} onChange={handleCategoryChange} required>
        <option value="" disabled selected>Category</option>
        {categories.map((category, index) => (
          <option value={category} key={String(index)}>{category}</option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
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
