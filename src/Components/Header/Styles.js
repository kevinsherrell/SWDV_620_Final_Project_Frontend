import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const InnerContainer =styled.div`
  //max-width: 1200px;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  align-items: center;
`
export const HeaderLink = styled(Link)`
  font-size: 1.2em;
    &:hover{
      font-weight: bold;
      text-decoration: underline;
    }
`
export const LogoutButton = styled.button`
  border: none;
  border-radius: 15px;
  padding: 10px;
  margin-left: auto;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const Greeting = styled.p`
    font-size: 1.5em;
    font-weight: bold;
`