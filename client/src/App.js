import logo from './logo.svg';
import React, {useEffect, useState } from "react";
import './App.css';
import Gallery from "./gallery";

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
        response => response.json()
    ).then(
        data => {
          setBackendData(data)
        }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hello worlds</h1>
        {
            // typeof backendData
            (typeof backendData === 'undefined') ? (
                <h2>Loading...</h2>
            ) : (
                backendData?.users?.map((user, i) => (
                <p key={i}>{user}</p>
            ))
            )
        }
        <Gallery></Gallery>
    </div>
  );
}

export default App;
