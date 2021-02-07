import { useState } from "react"
import React from 'react'

function Player(props) {
    const {data}=props;
    
    console.log( data)
    if(data)
    {
        const{display_name:userName,images,id:userId}=data;
        return (
            <div>
    <h2>Login Successful</h2>
    <h2>Welcome,{userName}</h2>
    <img src={images[0].url} alt="PROFILE"></img>
                <h2>User id:{userId}</h2>
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

export default Player
