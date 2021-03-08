import {React,useEffect,useState} from 'react'
import './Sidebar.css'
import {spotify} from './App'

function Sidebar() {

    const [user,setUser]=useState()
    const default_img='https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png'


useEffect(() => {
    
    const getUser=async ()=>{
        
        const data=await spotify.getMe()
        
        setUser(data)
    }
    getUser()
    
}, [])

if(user ) {
   

    const{display_name:userName,images,id:userId,followers:{total:fans}}=user;
  
return (
  <div className="userDisplay">
   
   <img src={(images[0])?images[0].url:default_img} className="userImage" alt="PROFILE"></img>
  <h2 className="basic_text"> {userName}</h2>
  <h3 className='basic_text'>Followers: {fans} </h3>

   
              
    
   
   
   </div>
           
)

}
else{

return(
    <h1>Loading...</h1>
)
}
   
}

export default Sidebar
