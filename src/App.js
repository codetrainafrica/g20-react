import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const getReviews = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchText}&api-key=D7xDpEUl56Bj1UunuQrLgQXkXuWYET9B`
      );

      /*
      {
        headers...,
        status...,
        statusText...,
        data: {
          results: ["Avengers 1", "Avengers 2"],
          status...
        }
      }
      */
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getReviews();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for any movie"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="submit" />
      </form>

      {movies.map((movie) => {
        return (
          <div>
            <h1>{movie.headline}</h1>
            <h3>{movie.display_title}</h3>
            <img
              src={
                movie.multimedia
                  ? movie.multimedia.src
                  : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
