import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(0);
  const [hasOscars, setHasOscars] = useState(false);

  const handleTitleChange = event => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleDirectorChange = event => {
    console.log(event.target.value);
    setDirector(event.target.value);
  };

  const handleIMDBChange = event => {
    console.log(event.target.value);
    setIMDBRating(event.target.value);
  };

  const handleHasOscarChange = event => {
    console.log(event.target.checked);
    setHasOscars(event.target.checked);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewMovie({ title, director, IMDBRating, hasOscars });
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={handleDirectorChange}
        />

        <label>IMDB Rating:</label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={handleIMDBChange}
        />

        <label>Won Oscars:</label>
        <input
          type="checkbox"
          name="hasOscars"
          value={hasOscars}
          onChange={handleHasOscarChange}
        />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
