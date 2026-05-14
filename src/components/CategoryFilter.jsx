function CategoryFilter({ setCategory }) {
  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="">All</option>
      <option value="Programming">Programming</option>
      <option value="Design">Design</option>
      <option value="Music">Music</option>
    </select>
  );
}

export default CategoryFilter;