import styled from "styled-components";
import { Colors } from "../../Constants/theme";
/*import { Colors } from "../../Constants/theme";*/


export const Background = styled.div`
width: 100vw;
min-height: 100vh;
background-color: ${Colors.White};
display: flex;
flex-direction: column;
`

export const Header = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${Colors.Black};
`

export const HeaderTitle = styled.text`
font-size: 38px;
margin: 20px;
color: ${Colors.White};
`

export const DivInput = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 50px;
`
export const Input = styled.input`
width: 30vw;
height: 3.5Kvh;
`

export const Button = styled.button`
font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

export const Lista = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

export const DeleteButton = styled.button`
border-color: ${Colors.Red};
background-color: ${Colors.White};
color: ${Colors.Red};
`


export const DivItem = styled.div`
margin-top: 5px;
`