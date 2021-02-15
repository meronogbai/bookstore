const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="category" id="category">
      {categories.map((category, index) => (
        <option value={category} key={String(index)}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
