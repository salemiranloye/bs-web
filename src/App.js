import React, { useState } from 'react';
import Header from '../src/componets/Header';
import './style.css';
import cow from "../src/cow.png";

function App() {
  const [initialText, changeInitialText] = useState('');
  const [reSubmissionText, changeReSubmissionText] = useState('');
  const [displayInfo, changeDisplay] = useState(false);
  const [response, changeResponse] = useState('');
  const [percent, changePercent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the appropriate text based on the context (initial submission or re-submission)
    const textToSend = displayInfo ? reSubmissionText : initialText;

    // Send the user's input to the Flask API
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: textToSend }), // Send the appropriate text as JSON data
    })
      .then(response => response.json())
      .then(data => {
        changeResponse(data.response);
        changePercent(data.percent);
        changeDisplay(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <Header />
      {!displayInfo ? (
        <div className="content">
          <div className="app-body">
            <img src={cow} alt="Cow" />
            <div className="input-section">
              <form onSubmit={(e) => handleSubmit(e)}>
                <textarea
                  rows="10"
                  cols="100"
                  className="input"
                  placeholder="Enter the bull shi..."
                  value={initialText}
                  onChange={(e) => changeInitialText(e.target.value)}
                />
              </form>
              <button type="submit" className="button" onClick={(e) => handleSubmit(e)}>
                  <b>Smell</b>
                </button>
            </div>
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
              placeholder="Enter the bull shi..."
              value={reSubmissionText}
              onChange={(e) => changeReSubmissionText(e.target.value)}
            />
            <div className='center'>
              <button className="button" onClick={(e) => handleSubmit(e)}>
                <b>Re-Sniff</b>
              </button>
            </div>
          </div>
          <div className='Box'>
            <h1 className='title'>Results</h1>
            <hr/>
            <p>Response: {response}</p>
            <p>Percent: {percent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
