import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Movie({ coverImg, title, genres, summary }){
    return (
        <div>
            <img src={coverImg} alt="cover of movie" />
            <h3>
                <Link to="/movie">{title}</Link>
            </h3>
            <h5> {genres.map((genre)=>(<span key={genre}>{genre} </span>))} </h5>
            {summary}
        </div>
    )
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    summary : PropTypes.string.isRequired
}

export default Movie;