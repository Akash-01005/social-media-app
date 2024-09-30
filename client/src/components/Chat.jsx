import axios from "axios";
import { useEffect, useState } from "react"


const Chat = () => {
    const [chat,setChat] = useState([]);
    
    useEffect(()=>{
        fetchChat();
    },[chat])
    
    function fetchChat(){
       axios.get("api/chat")
       .then((res)=>{
         setChat(res.data)
       })
       .catch(err=>{console.log(err)})
    }

  return (
    <div>
        
    </div>
  )
}

export default Chat