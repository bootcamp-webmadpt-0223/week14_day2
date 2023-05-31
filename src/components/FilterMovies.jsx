function FilterMovies(props) {
  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select onChange={props.filterMoviesByName}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
