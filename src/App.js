import React, { useState } from 'react';
import Header from '../src/componets/Header'
import './style.css'
import cow from "../src/cow.png"

function App() {
  const [displayInfo,changeDisplay] = useState(false)
  const [text,changeText] = useState('')
  const [response, changeResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    changeDisplay(true);
  };

  return (
    <div className="App">
      <Header />
      {!displayInfo ? (
        <div className="content">
          <div className="app-body">
            <img src={cow} alt="Cow" /> {/* Added alt attribute */}
            <div className="input-section">
              <textarea
                rows="10"
                cols="100"
                className="input"
                type="text"
                placeholder="Enter the bull shi..."
                onInput={(e) => changeText(e.target.value)}
              />
            </div>
            <button className="button" onClick={(e) => handleSubmit(e)}>
                <b>Smell</b>
            </button>
          </div>
          <div className="disclaimer">
            <p>This is not 100 percent true and should be taken with a grain of salt.</p>
          </div>
        </div>
      ) : (
        <div className='results'>
          <div className='Box'> 
          <h1 className='title'>Was this Text Bias or Bull?</h1>
          <hr/>
          <textarea
                rows="35"
                cols="110"
                className="input"
                type="text"
                placeholder="Enter the bull shi..."
                onInput={(e) => changeText(e.target.value)}
              >{text}</textarea>
              <div className='center'>
              <button className="button" onClick={(e) => handleSubmit(e)}>
                <b>Re-Sniff</b>
            </button>
              </div>
          </div>
          <div className='Box'>
            <h1 className='title'>Results</h1>
            <hr/>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
