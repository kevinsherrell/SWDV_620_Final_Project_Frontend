import {useAuthContext} from "../../Hooks/Auth";
import {Link} from "react-router-dom";
import {Greeting, HeaderContainer, HeaderLink, InnerContainer, LogoutButton} from "./Styles";

const Header = () => {
    const {user, logout} = useAuthContext();
    return (
        <HeaderContainer>
            <InnerContainer>
                <Greeting>Hi, {user.email}</Greeting>
                <HeaderLink to={'/'}>Home</HeaderLink>
                <HeaderLink to={'/favorites'}>Favorites</HeaderLink>
                <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
            </InnerContainer>

        </HeaderContainer>
    )
}
export default Header;