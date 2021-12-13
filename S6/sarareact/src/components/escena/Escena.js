import React from "react";
import styled,{css}from'styled-components'

const H5 = styled.h5`
background: ${props => props.backgroundColor || "transparent"};
border-radius: 30px;
border: 2px solid black;
color: black;
padding: 1em;
margin: 20px;
`


function Escena(props){
    
    return <H5 backgroundColor= {props.backgroundColor}>  {props.historia}</H5>;

}
export default Escena;