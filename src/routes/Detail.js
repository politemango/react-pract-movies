import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] =useState(true);
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
                .json();
            setMovie(json.data.movie);
            setLoading(false);
        }

        getMovie();
    }, [id]);

    return (
        <div>
            <h1>Detail page</h1>
            <hr />
            {loading ? <h3>Loading...</h3> : <h3>{movie.title}</h3>}
            
        </div>
    )
}

export default Detail;