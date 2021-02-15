const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" id="title" />
      </label>
      <select name="category" id="category">
        {categories.map((category, index) => (
          <option value={category} key={String(index)}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BooksForm;
