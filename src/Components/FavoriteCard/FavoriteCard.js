import {useFavoriteContext} from "../../Hooks/Favorites";
import {useAuthContext} from "../../Hooks/Auth";
import {useEffect, useState} from "react";
import {CardButton, CardImage, CardInfo, DoneButton, EditButton, FavInput, FCcontainer, RemoveButton} from "./Styles";

const FavoriteCard = (props) => {
    const [edit, setEdit] = useState(false);
    const {favorites, createFavorite, updateFavorite, getUpdatedState, deleteFavorite} = useFavoriteContext();
    console.log(favorites[0].Rating);
    console.log(getUpdatedState());
    const {user} = useAuthContext();
    // const {_id,Title, imdbID, Type, Poster, Year, Rating} = props;
    const [favorite, setFavorite] = useState(props);
    const {_id,Title, imdbID, Type, Poster, Year, Rating} = favorite;

    const favoriteObject = {
        Title: Title,
        imdbID: imdbID,
        Type: Type,
        Year: Year,
        Poster: Poster,
        Rating: Rating
    }
    useEffect(()=>{


        // if(JSON.stringify(props) !== JSON.stringify(favorite)){
        //     console.log('props have changed');
        //     console.log(props.Rating);
        //     console.log(favorite.Rating);
        // }
    }, [favorites])

    const updateComponent = ()=>{
        if(JSON.stringify(props) !== JSON.stringify(favorite)){
            setFavorite(props);
        }
    }
    const updateFavObj = (fieldName, obj, e)=>{
        obj[fieldName] = e.target.value;
        console.log(favoriteObject);
    }
    // console.log(favoriteObject);
    return (
        <FCcontainer>
            <CardImage src={Poster} alt=""/>
            <CardInfo>
                {/*Title*/}
                {edit ? <FavInput type="text" placeholder={Title} onChange={(e)=>updateFavObj("Title", favoriteObject, e)}/> : <h2>{Title} ({Year})</h2>}
                {/*imdbID*/}
                {edit ? <FavInput type="text" placeholder={imdbID} onChange={(e)=>updateFavObj("imdbID", favoriteObject, e)}/> : <p>IMDBID: {imdbID}</p>}
                {/*Type*/}
                {edit ? <FavInput type="text" placeholder={Type} onChange={(e)=>updateFavObj("Type", favoriteObject, e)}/> : <p>Type: {Type}</p>}
                {/*Rating*/}
                {edit ? <FavInput type="number" placeholder={Rating || "No Rating"} onChange={(e)=>updateFavObj("Rating", favoriteObject, e)}/> : <p>Rating: {Rating || "No Rating"}</p>}

            </CardInfo>
            {edit ? <DoneButton onClick={() => {
                    console.log("favoriteObject")
                    updateFavorite(favoriteObject, _id)

                    setEdit(!edit);
                }}>Done</DoneButton> :
                <RemoveButton onClick={() => setEdit(!edit)}>Edit</RemoveButton>}


            <EditButton onClick={() => deleteFavorite(_id)}>Remove</EditButton>
        </FCcontainer>
    )
}

export default FavoriteCard;