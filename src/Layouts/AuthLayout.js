import {Outlet, useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {useAuthContext} from "../Hooks/Auth";

const AuthLayout = ()=>{
    const navigate = useNavigate();
    const {user, authenticated} = useAuthContext();

    useEffect(()=>{
        console.log(authenticated)
        if(authenticated){
            navigate('/')
        }
    },[authenticated])
    return(
        <div>
            <Outlet/>
        </div>
    )
}
export default AuthLayout;