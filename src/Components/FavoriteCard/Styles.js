import styled from 'styled-components';

export const FCcontainer = styled.div`
  //display: flex;
  //flex-direction: column;
  width: 23.5%;
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

`
export const CardImage = styled.img`
  display: block;
  width: 100%;
`

export const CardInfo = styled.div`
  padding: 10px;
  margin-bottom: 20px;
display: flex;
  flex-direction: column;
`
export const RemoveButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  width: 50%;
  height: 30px;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const DoneButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  width: 50%;
  height: 30px;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  width: 50%;
  height: 30px;
  &:hover{
    background-color: lightblue;
    cursor: pointer;
  }
`
export const FavInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
`