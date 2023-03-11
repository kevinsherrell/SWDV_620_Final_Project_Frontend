import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  align-items: center;
  
`
export const InnerContainer = styled.div`
  // width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  //background-color: pink;
`
export const InputContainer = styled.div`
  height: 30px;
  margin-bottom: 15px;
`
export const Input  = styled.input`
  height: 100%;
  padding-left: 10px;
  
`
export const Submit = styled.button`
  height: 100%;
  width: 50px;
  border: none;
  border: 1px solid darkgrey;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const Header = styled.h1`
    margin-bottom: 20px;
`
export const SubHeader = styled.h2`
    margin-bottom: 10px;
`
export const RegLogin = styled.span`
  text-decoration: underline;
  &:hover{
    cursor: pointer;
    color: hotpink;
  }
`