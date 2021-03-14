import React, { useEffect, useState } from 'react';
import SpotifyWebApi from "spotify-web-api-js";

import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';

// Create an instance of spotify
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();         // Get the token object from URL
    window.location.hash = "";              // Hide the token on the URL

    const _token = hash.access_token;       // Get the token
    
    if (_token) {
      setToken(_token);                     // Store the token

      spotify.setAccessToken(_token);       // Put the token inside the SpotifyWebApi
      
      // Get the user account from spotify
      spotify.getMe().then(user => {
        console.log("user", user)
      })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <h1>Welcome User</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
