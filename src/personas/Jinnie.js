import React from 'react';
import Invalid from './Invalid';
import './persona.css'
import personas from './index.json'

function Jinnie() {

    React.useEffect(() => {
        for( var pers in personas){
        
            if(personas[pers].name === "jinnie"){
                setCode(personas[pers].code)
                setStory(personas[pers].story)
            }
            }
    },[]);

    const [code, setCode] = React.useState('');
    const [story, setStory] = React.useState('');

    if(localStorage.getItem("code") === code){
        return (
            <div className="persona">

                 <a href="/">Return home</a><br />{story}
            </div>
        );
    }else{
        return(
            <Invalid />
        )
    }
}

export default Jinnie;