import React,{useState,useEffect} from 'react'
import './Body.css'
import {spotify} from "./App"

function Body() {

    const [curr,setCurr]=useState()
    const[count,setCount]=useState()

    function update(){
        setCount((state)=>{return {count:count+1}})
    }
    function skip(){
        spotify.skipToNext()
        

    }

    useEffect(() => {
    const getcurr=async()=>{
        const data= await spotify.getMyCurrentPlayingTrack()
        const data2=await spotify.getMyCurrentPlaybackState()
        console.log(data)
        setCurr(data)
    }
    getcurr()
    
}, [count])

if(curr)
{const {item:{name:track,}}=curr
return (
    <div className="body">
 <button onClick={update}>Refresh</button>
 <button onClick={()=>{skip()}}>Skip</button>
       <h2>Body</h2> 
    </div>
)}

    else{
        return(
            <h1>Seems empty</h1>

        )
    }
}

export default Body
