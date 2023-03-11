import {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {ACTIONS, favoritesReducer} from '../Reducers/FavoritesReducer';

export const FavoritesContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
const {CREATE_FAVORITE, UPDATE_FAVORITE, DELETE_FAVORITE, GET_FAVORITES} = ACTIONS;

export const FavoriteProvider = ({children}) => {
    const [state, dispatch] = useReducer(favoritesReducer, {
        favorites: []
    })

    useEffect(() => {

    }, [])

    //REGISTER
    const createFavorite = async (obj) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }

        const favRequest = await fetch(`${URL}/favorites/create`, options);
        const favResponse = await favRequest.json();

        console.log(favResponse.data)
        dispatch({
            type: CREATE_FAVORITE,
            payload: favResponse.data
        })
        return favResponse.data;
    }
    const getFavorites = async (userID)=>{
        const favReq = await fetch(`${URL}/favorites/${userID}`);
        const favRes = await favReq.json();

        dispatch({
            type: GET_FAVORITES,
            payload: favRes.data
        })
    }
    const updateFavorite = async (obj, favID)=>{
        console.log('favorite is updating');
        console.log(obj);
        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        const favReq = await fetch(`${URL}/favorites/update/${favID}`, options);
        const favRes = await favReq.json();

        dispatch({
            type: UPDATE_FAVORITE,
            payload: favRes.data
        })
        console.log('favorite has updated'
        )
    }

    const deleteFavorite = async (favID)=>{
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const favReq = await fetch(`${URL}/favorites/delete/${favID}`, options);
        const favRes = await favReq.json();

        dispatch({
            type: DELETE_FAVORITE,
            payload: favRes
        })
    }
    const getUpdatedState = ()=>{
        return state;
    }
    //LOGIN
    // const login = async (obj) => {
    //     const options = {
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         credentials: "include",
    //         body: JSON.stringify(obj)
    //     }
    //
    //     fetch(`${URL}/users/login`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             if (response.error) {
    //                 return dispatch({
    //                     type: AUTH_ERROR,
    //                     payload: response.error
    //                 })
    //             }
    //             localStorage.setItem("user", JSON.stringify(response.data));
    //
    //             return dispatch({
    //                 type: LOGIN_USER,
    //                 payload: response.data
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }
    // // LOGOUT
    // const logout = () => {
    //     return dispatch({
    //         type: LOGOUT_USER,
    //         payload: {}
    //     })
    // }

    return (
        <FavoritesContext.Provider value={{
            ...state,
            createFavorite: createFavorite,
            getFavorites: getFavorites,
            updateFavorite: updateFavorite,
            getUpdatedState: getUpdatedState,
            deleteFavorite: deleteFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoriteContext = () => {
    return useContext(FavoritesContext);
}