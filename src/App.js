import React from 'react';
import './App.css';
import mansion from './img/mansion.jfif'
import tree from './img/tree.jpeg'

function App() {

  React.useEffect(() => {
    localStorage.clear()
  });

  function onClick(e){
    localStorage.setItem("code", "jinnie")
    window.location.href="jinnie"
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

          <input>
          </input>

          <button onClick={onClick}>
            Go
          </button>
        </section>
        <br />

        <img width="100%" style={{width:'100%'}} alt="mansion" src={tree}/>

      </div>
    </div>
  );
}

export default App;
