import {useFavoriteContext} from "../../Hooks/Favorites";
import {useAuthContext} from "../../Hooks/Auth";
import {useEffect} from "react";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import {FavContainer} from "./Styles";


const Favorites = () =>{
    const {user} = useAuthContext();
    const {favorites, getFavorites} = useFavoriteContext();
    useEffect(()=>{
        getFavorites(user.id);
    },[favorites.length])

    const mapFavorites = favorites.map(favorite=>{
        return <FavoriteCard {...favorite} key={`${JSON.stringify(favorite)}${favorite.Year}`}/>
    })
    return (
        <FavContainer>
            {mapFavorites}
        </FavContainer>
    )
}
export default Favorites;