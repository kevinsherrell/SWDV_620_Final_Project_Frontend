import {useState} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import {HomeContainer, Input, MovieWrapper, SearchButton, SearchWrapper} from "./Styles";

const URL = process.env.REACT_APP_ENDPOINT;
const KEY = process.env.REACT_APP_API_KEY;
const Home = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const getMovies = (search) => {
        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const mapMovies = movies.map(movie=>{
        return <MovieCard {...movie} key={movie.imdbID.id}/>
    })
    return (
        <HomeContainer>
            {/*    SEARCH BAR */}
            <SearchWrapper>
                <Input type="text" placeholder={"search"} onChange={e => setSearch(e.target.value)}/>
                <SearchButton onClick={() => getMovies(search)}>Search</SearchButton>
            </SearchWrapper>

            <MovieWrapper>
                {mapMovies}
            </MovieWrapper>
        </HomeContainer>
    )
}
export default Home;