import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async ()=>{
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`))
      .json();
    setMovies(json.data.movies);
    setLoading(false);
  }


  useEffect(()=>{getMovies()},[]);

  return (
    <div>
      <h1>Movie list</h1>
      {loading ? <h3>Loading...</h3> : <div>
          {movies.map((movie)=>(<div key={movie.id}>
            <img src={movie.medium_cover_image} alt="cover of movie" />
            <h3>{movie.title_long}</h3>
            <h5> {movie.genres.map((genre)=>(<span key={genre}>{genre} </span>))} </h5>
            {movie.summary}
            </div>))}
        </div>}
    </div>
  );
}

export default App;
