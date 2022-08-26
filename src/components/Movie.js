import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres, summary }){
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt="cover of movie" />
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <h5> {genres.map((genre)=>(<span key={genre}>{genre} </span>))} </h5>
            {summary.length>235 ? `${summary.slice(0,235)}...` : summary}
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    summary : PropTypes.string.isRequired
}

export default Movie;