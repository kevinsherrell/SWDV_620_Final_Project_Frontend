import {useFavoriteContext} from "../../Hooks/Favorites";
import {useAuthContext} from "../../Hooks/Auth";
import {CardImage, CardInfo, FavoriteButton, MCcontainer, SuccessContainer} from "./Styles";
import {useState} from "react";

const MovieCard = (props) => {
    const {favorites, createFavorite} = useFavoriteContext();
    const {user} = useAuthContext();
    const {Title, imdbID, Type, Poster, Year} = props;
    const [success, setSuccess] = useState(false);
    const favoriteObject = {
        userID: user.id,
        Title: Title,
        imdbID: imdbID,
        Type: Type,
        Year: Year,
        Poster: Poster
    }
    const removeSuccess = ()=>{
        setTimeout(() => {
            setSuccess(!success);
        }, 3000)
    }
    const displaySuccess = () => {
        return (
            <SuccessContainer>
                <p>Favorite has been saved!</p>
                {removeSuccess()}
            </SuccessContainer>

        )
    }
    return (
        <MCcontainer>

            <CardImage src={Poster} alt=""/>
            <CardInfo>
                <h2>{Title} ({Year})</h2>
                <p>IMDBID: {imdbID}</p>
                <p>Type: {Type}</p>
            </CardInfo>
            <FavoriteButton onClick={() => {
                createFavorite(favoriteObject)
                setSuccess(!success);
            }}>Add To Favorites</FavoriteButton>
            {success && displaySuccess()}
        </MCcontainer>
    )
}

export default MovieCard;