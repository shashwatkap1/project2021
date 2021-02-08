import { useState,useEffect } from "react"
import React from 'react'
import "./successful.css"
import image from "./logo_big.png"
import {spotify} from "./App" 
function LoginSuccessful(props) {
    const {data}=props;
    function refresh(){
        setCount(count+1)
        
    }
    function next(){
        setCount(count+1)
    
        spotify.skipToNext()
        
    }
    


    const[curr,setCurr]=useState();
    const[count,setCount]=useState(0);
    const Notcurr=()=>
    {
        return(
            <div >
            <h2>Seems empty here &#128517;
             <br></br>
             Here's what you can do:
            <br></br>
             ->Play a song on any device 
            <br></br>
            ->Hit refresh
            </h2>
                
            </div>
        )
    }
   
    useEffect(() => {
        const getPlaylist=async ()=>{
            const data=await spotify.getMyCurrentPlaybackState()
            console.log(data)
            setCurr(data)
            }    
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
            <div>
          
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
            <div className="successful">
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
             {!curr && <Notcurr/>}

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



