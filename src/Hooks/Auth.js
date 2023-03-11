import {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {ACTIONS, authReducer} from '../Reducers/AuthReducer';

export const AuthContext = createContext('');

const URL = process.env.REACT_APP_ENDPOINT;
const {RETRIEVE_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER, AUTH_ERROR} = ACTIONS;

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        authenticated: false,
        user: {},
        message: []
    })

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser !== null) {
            const userObject = JSON.parse(storedUser);
            dispatch({
                type: RETRIEVE_USER,
                payload: userObject
            })
        }
    }, [])

    //REGISTER
    const register = async (obj) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }

        const regRequest = await fetch(`${URL}/users/register`, options);
        const regResponse = await regRequest.json();

        if (regResponse.error) {
            return dispatch({
                type: AUTH_ERROR,
                payload: regResponse.error
            })
        }
        dispatch({
            type: REGISTER_USER,
            payload: regResponse.data
        })
        localStorage.setItem("user", JSON.stringify(regResponse.data));
        return regResponse.data;
    }

    //LOGIN
    const login = async (obj) => {
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify(obj)
        }

        fetch(`${URL}/users/login`, options)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    return dispatch({
                        type: AUTH_ERROR,
                        payload: response.error
                    })
                }
                localStorage.setItem("user", JSON.stringify(response.data));

                return dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                })
            })
            .catch(err => console.log(err))
    }
    // LOGOUT
    const logout = () => {
        localStorage.removeItem("user");
        return dispatch({
            type: LOGOUT_USER,
            payload: {}
        })
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            register: register,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}