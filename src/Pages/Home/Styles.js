import styled from "styled-components";

export const HomeContainer = styled.div`

`
export const SearchWrapper = styled.div`
  margin-bottom: 30px;
  height: 40px;
  //background-color: pink;
`
export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
export const Input = styled.input`
  height: 100%;
  width: 20%;
  padding-left: 15px;
`

export const SearchButton = styled.button`
  height: 100%;
  width: 5%;
  border: none;

  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`