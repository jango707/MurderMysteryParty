import React, { useState } from 'react';
import './App.css';
import mansion from './img/mansion.jfif'
import tree from './img/tree.jpeg'
import personas from './personas/index.json'

function App() {

  React.useEffect(() => {
    //localStorage.clear()
  });

  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function onClick(){
    var _code= code
    if(!code){
      setError("Empty code")
      return
    }

    let personaIdentifdied = ''

    for( var pers in personas){
      
      if(personas[pers].code === code){
        personaIdentifdied = personas[pers].name
      }
    }

    if(!personaIdentifdied){
      setError("Invalid code")
    }else{
      setError("")
      localStorage.setItem("code", _code)
      window.location.href=personaIdentifdied
    }

  }

  function onChange(e){
    setCode(e.target.value)
  }

  return (
    <div className="App">
      <div className='content'>
        <h2>
          Welcome to JLau's Murder Mystery Party
        </h2>
        <img width="100%" alt="mansion" src={mansion}/>

        <section>
          <h4>
            Please put your passcode to see your role
          </h4>

          <input onChange={onChange}>
          </input>

          <button onClick={onClick}>
            Go
          </button>
          <div>
            {error}
          </div>
        </section>
        <br />

        <img width="100%" style={{width:'100%'}} alt="mansion" src={tree}/>

      </div>
    </div>
  );
}

export default App;
