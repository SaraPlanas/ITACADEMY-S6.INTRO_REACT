import React from "react";
import './App.css';
import { useState } from "react";





//components
import Escena from "./components/escena/Escena";
import history from './components/history.json';




function App() {

    const [historyIndex, setHistoryIndex] = useState(0);

    const newhistory = history.map((textHistory, index)=>{
        return(
            
                historyIndex === index ? <Escena backgroundColor="red" historia = {textHistory}/> 
                : <Escena historia = {textHistory}/>
            
            
    
        )
    })

    return <div className = "App">


        {
            newhistory
        }
        </div>
}

export default App;