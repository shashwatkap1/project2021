import { useState } from "react"
import React from 'react'
import "./LoginSuccessful.css"
import image from "./logo.png"
function LoginSuccessful(props) {
    const {data}=props;
    
    console.log( data)
    if(data)
    {
        const{display_name:userName,images,id:userId}=data;
        return (
            <div className="successful">
             <img  src={image} className="logobig" alt="Spotify logo" />
             <img src={(images[0])?images[0].url:"https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png"} alt="PROFILE"></img>
              <h2>Login Successful!</h2>
    <h2>Welcome, {userName}</h2>
    
                <h2 className="userid">User id : {userId}</h2>
                        </div>
        )
      
}
else
return(
    <div>
        <h1>LOGIN UNSUCCESSFUL</h1>
    </div>
)
}

export default LoginSuccessful