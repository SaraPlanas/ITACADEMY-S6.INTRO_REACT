import React from "react";
import './App.css';
import { useState } from "react";
import styled,{css}from'styled-components'

//components
import Escena from "./components/escena/Escena";
import history from './components/history.json';
import Bienvenida from "./components/escena/Bienvenida";

//css
const Button = styled.button`
  background-color: grey;
  color: black;
  font-size: 20px;
  padding: 1em;
  margin: 0px;
  cursor: pointer;
  width:100%;
  `;
const ButtonSigue = styled.button`
background-color: grey;
color: black;
font-size: 20px;
padding: 1em;
margin: 0px;
cursor: pointer;
width:100%;
`;
const ButtonGroup = styled.div`
  display: flex;
   
`
function App() {

  const [renderIntro, setRenderIntro] = useState(true);
    const [historyIndex, setHistoryIndex] = useState(0);
 
    const newhistory = history.map((textHistory, index)=>{
        return(
                    
                historyIndex === index ? <Escena backgroundColor="red" historia = {textHistory}/> 
                : <Escena historia = {textHistory}/> 
        )
    })

    


return <div className = "App">
       {renderIntro&&<div><Bienvenida/><ButtonSigue id="seguir" onClick={() => setRenderIntro(false)} >Començar</ButtonSigue></div> } 
       
     
   {!renderIntro&&
    <ButtonGroup>
      <Button id='back' onClick={()=>setHistoryIndex(historyIndex -1)} disabled={historyIndex===0}>
        Anterior</Button>
        <Button id='next' onClick={()=>setHistoryIndex(historyIndex +1)} disabled={historyIndex===3}>
          Següent</Button>
          </ButtonGroup>
}
    {!renderIntro&& newhistory}
            

        </div>  
      }




export default App;