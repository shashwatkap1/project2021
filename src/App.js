
import React, { useState,useEffect } from 'react'
import './App.css';
import Login from "./Login";
import {getTokenFromUrl} from "./spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import {useDataLayerValue} from "./DataLayer"
import LoginSuccessful from "./Successful2"


export const spotify = new SpotifyWebApi();
function App() {
  

  const [token,setToken]=useState();
  const[userData,setuserData]=useState();
  const [curr,setCurr]=useState();
  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

    }
    const getData=async ()=>{
      const data=await spotify.getMe()
      console.log(data)
      setuserData(data);
      }
  getData();
  const getPlaylist=async ()=>{
    const data=await spotify.getMyCurrentPlaybackState()
    console.log(data)
    setCurr(data)
    }    
  getPlaylist()
    
  }, []);
  
console.log(userData)

  return <div className="app">{token ? <LoginSuccessful data={userData} curr={curr}/>: <Login />}</div>;  
}

export default App;
 
