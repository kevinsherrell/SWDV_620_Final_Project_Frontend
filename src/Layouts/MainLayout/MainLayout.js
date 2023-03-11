import {Outlet, useNavigate} from "react-router-dom";
import {useAuthContext} from "../../Hooks/Auth";
import {useEffect} from "react";
import Header from "../../Components/Header/Header";
import {useFavoriteContext} from "../../Hooks/Favorites";
import {InnerContainer, MLcontainer} from "./Styles";



const MainLayout = () => {
    const {user, authenticated} = useAuthContext();
    const {favorites} = useFavoriteContext();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("mainlayout useEffect is firing");
        if(!authenticated){
            navigate('/auth/login');
        }
    },[authenticated])
    return (
        <MLcontainer>
                <Header/>
            <InnerContainer>
                <Outlet/>
            </InnerContainer>

        </MLcontainer>
    )
}
export default MainLayout;