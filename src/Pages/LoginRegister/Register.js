import {useState} from 'react';
import {useAuthContext} from "../../Hooks/Auth";
import {Link} from "react-router-dom";
import {Header, InnerContainer, Input, InputContainer, LoginContainer, RegLogin, SubHeader, Submit} from "./Styles";

const Register = () => {
    const {user, authenticated, register} = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");

    const registerObject = {
        email: email,
        password: password,
        verify: verify
    }

    return (
        <LoginContainer>
            <InnerContainer>
                <Header>My Movie Collection</Header>
                <SubHeader>Register</SubHeader>
                <InputContainer>
                    <Input type="text" placeholder={'email'} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder={'password'} onChange={e => setPassword(e.target.value)}/>
                    <Input type="password" placeholder={'verify password'} onChange={e => setVerify(e.target.value)}/>
                    <Submit onClick={e => register(registerObject)}>Register</Submit>
                </InputContainer>
                <p>Already registered? <RegLogin><Link to={'/auth/login'}>Log In Here!</Link></RegLogin></p>

            </InnerContainer>

        </LoginContainer>
    )
}
export default Register;