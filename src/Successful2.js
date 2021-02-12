
import { useState,useEffect } from "react"
import React from 'react'
import "./successful.css"
import image from "./logo_big.png"
import {spotify} from "./App" 
import NotCurr from "./NotCurr"

function LoginSuccessful(props) {
    const {data}=props;
    function refresh(){
        setCount(count+1)
        
    }
    function next(){
        spotify.play()
        spotify.skipToNext()
     
setCount(count+1)
         getPlaylist()
        
                
    }
    
    
    const getPlaylist=async ()=>{
        const data=await spotify.getMyCurrentPlaybackState()
        const data2=await spotify.getMyCurrentPlayingTrack()
        console.log(data2)

        setCurr(data)
        }    
    

    const[curr,setCurr]=useState();
    const[count,setCount]=useState(0);
   
   
    useEffect(() => {
        getPlaylist()
       
            
    }, [count])
    const Curr=()=>{
        const{device:{name :devmodel="Dummy"} ,item :{name:track="Null", preview_url:mp3_url}}=curr
        const audio=new Audio(mp3_url)
        const start=()=>
        audio.play()
        const pause=()=>
        audio.pause()
       
        return(
            <div className="playing">
          
    <h1>Currently playing 🎶 : </h1> 
        

                 <h1>Song 🎵 : "{track}"</h1> 
                    <h1>Device 📱 : "{devmodel}"</h1>
                     <button className="music" onClick={start}>Play Preview</button>
                     
                     <button className="music" onClick={pause}>Pause Preview</button>
                            <button className="music" onClick={()=>{next();refresh();}}>Skip Track</button>
            </div>
        )}
    
    
    
   if(data ) {
   

              const{display_name:userName,images,id:userId}=data;
            
        return (
            <div className="userDisplay">
             <img  src={image} className="logo" alt="Spotify logo" />
             <h1>Login Successful!</h1>
             <hr></hr>
             <section>
             <img src={(images[0])?images[0].url:"https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png"} className="userpic" alt="PROFILE"></img>
            
            <h2>Welcome, {userName}</h2>
            
                        <h2 className="userid">User id : {userId}</h2>
             </section>
             <hr></hr> 
             
             {curr && <Curr/>}
             <button className="music" onClick={()=>refresh()}> Refresh:🔄</button>
             {!curr && <NotCurr/>}

             </div>
                     
        )
      
}
else{
    return(
        <div></div>
    )
}

                       
}

export default LoginSuccessful


