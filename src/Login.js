import React from 'react'
import "./Login.css"
import {loginUrl} from "./spotify"
import logo from "./logo_big.png"
function Login() {
    return (
        <div className="login">
        <img src={logo} className="logo_big" alt="Spotify logo" />
            <button className="btn"> <a href={loginUrl}> LOGIN WITH SPOTIFY </a></button>
      
        </div>
    )
}

export default Login
