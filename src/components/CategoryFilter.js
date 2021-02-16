import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const handleChange = e => {
    changeFilter(e.target.value);
  };
  return (
    <select name="category" id="category" onChange={handleChange}>
      {categories.map((category, index) => (
        <option value={category} key={String(index)}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
