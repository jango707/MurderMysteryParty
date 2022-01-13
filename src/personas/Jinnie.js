import React from 'react';
import Invalid from './Invalid';
import './persona.css'

function Jinnie() {

    if(localStorage.getItem("code") === "jinnie"){
        return (
            <div className="persona">
                hi i m Jinnie
            </div>
        );
    }else{
        return(
            <Invalid />
        )
    }
}

export default Jinnie;