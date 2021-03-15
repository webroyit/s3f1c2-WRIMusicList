import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";

import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue} from './DataLayer';

// Create an instance of spotify
const spotify = new SpotifyWebApi();

function App() {
  // First Argments is to get the data
  // Second Argments is to call the action to change on the data layer
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();         // Get the token object from URL
    window.location.hash = "";              // Hide the token on the URL

    const _token = hash.access_token;       // Get the token
    
    if (_token) {
      // Store the token
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })   

      spotify.setAccessToken(_token);       // Put the token inside the SpotifyWebApi
      
      // Get the user account from spotify
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])

  console.log("user", user);
  console.log("token", token);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
