import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom';
import {useAuthContext} from './Hooks/Auth';
import {useEffect} from 'react';
import AuthLayout from "./Layouts/AuthLayout";
import Register from "./Pages/LoginRegister/Register";
import Login from "./Pages/LoginRegister/Login";
import Home from "./Pages/Home/Home";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Favorites from "./Pages/Favorites/Favorites";
import GlobalStyle from "./GlobalStyle";

function App() {
    const {user, authenticated} = useAuthContext();
    // check if the user is already authenticated (local storage)

    //
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/favorites',
                    element: <Favorites/>
                }
                ]
        },
        {
            path: '/auth',
            element: <AuthLayout/>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login/>
                },
                {
                    path: "/auth/register",
                    element: <Register/>
                }
            ]
        }
    ])
    return (
        <div className="App">
            <GlobalStyle/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
