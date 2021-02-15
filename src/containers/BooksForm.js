import { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Learning');
  const handleTitleChange = e => setTitle(e.target.value);
  const handleCategoryChange = e => setCategory(e.target.value);
  return (
    <form>
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

export default BooksForm;
