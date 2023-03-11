import {useState} from 'react';
import {useAuthContext} from "../../Hooks/Auth";
import {Link} from "react-router-dom";
import {Header, InnerContainer, Input, InputContainer, LoginContainer, RegLogin, SubHeader, Submit} from "./Styles";

const Login = () => {
    const {user, authenticated, login } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginObject = {
        email: email,
        password: password,
    }

    return (
        <LoginContainer>
            <InnerContainer>
                <Header>My Movie Collection</Header>
                <SubHeader>Login</SubHeader>
                <InputContainer>
                    <Input type="text" placeholder={'email'} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder={'password'} onChange={e => setPassword(e.target.value)}/>
                    <Submit onClick={e=>login(loginObject)}>Login</Submit>
                </InputContainer>
                <p>Not yet registered? <RegLogin><Link to={'/auth/register'}>Register Here!</Link></RegLogin></p>
            </InnerContainer>

        </LoginContainer>
    )
}
export default Login;