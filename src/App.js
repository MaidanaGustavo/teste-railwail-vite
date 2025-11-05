import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="App">
      {!showMessage ? (
        <div className="initial-screen">
          <button className="red-button" onClick={() => setShowMessage(true)}>
            Clique Aqui
          </button>
        </div>
      ) : (
        <>
          <div className="love-message-container">
            <div className="background-image"></div>
            <h1 className="love-message">Te amo Maria Clara</h1>
            <div className="hearts-container">
              {[...Array(15)].map((_, index) => (
                <div
                  key={index}
                  className="heart"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
          </div>
          <footer className="footer">by: Gustavo Maidana</footer>
        </>
      )}
    </div>
  );
}

export default App;
