import axios from "axios";
import { useState } from "react"


const Home = () => {

    const [choice,setChoice] = useState('login');
    const [uname,setUname]  = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
    const [img,setImg] = useState('')
 

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(choice == 'login'){
        axios.post('http://localhost:3000/login',{email:email,password:pass})
        .then((res)=>{
           console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
    else{
        axios.post('http://localhost:3000/signup',{username:uname,email:email,password:pass,image:img})
        .then((res)=>{
           console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
  }

  return (
    <div className="bg-slate-500 h-lvh flex items-center justify-center">
        <div className="bg-white flex flex-col justify-center p-[20px] w-[600px] rounded-2xl">
          <h2 className="text-center">XChange</h2>
          <div className="flex flex-col">
            <div className="flex gap-10  my-1 justify-center">
               <button className="bg-slate-200 transition-all hover:bg-blue-200 p-1 rounded-2xl w-[180px]" onClick={()=>setChoice('login')}>Login</button>
               <button className="bg-slate-200 transition-all hover:bg-blue-200 p-1 rounded-2xl w-[180px]" onClick={()=>setChoice('signup')}>Sign Up</button>
            </div>
            {choice == 'login'?<div className="transition-all">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" onChange={(e)=>setEmail(e.target.value)}>Email:</label>
                        <input type="email" className="form-control my-1" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" id="pass" className="form-control my-1" onChange={(e)=>setPass(e.target.value)} />
                    </div>
                  <button type="submit" className="bg-blue-500 w-100 p-2 text-white hover:bg-blue-700 transition-all rounded-md my-3">Login</button>
                   <p className="text-center text-blue-700 underline cursor-pointer">Forgot Password?</p>
                </form>
             </div>:<div className="mt-3 transition-all">
                <form onChange={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="uname">Username:</label>
                        <input type="text" className="form-control my-1" id="uname" onChange={(e)=>setUname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control my-1" id="email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" id="pass" className="form-control my-1" onChange={(e)=>setPass(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pro">Profile:</label>
                        <input type="file" id="pro" className="form-control my-1" onChange={(e)=>setImg(e.target.files[0])} />
                    </div>
                  <button type="submit" className="bg-blue-500 w-100 p-2 text-white hover:bg-blue-700 transition-all rounded-md my-3">Sign Up</button>
                </form>
             </div>
             }
         
          </div>
        </div>
 
       
    </div>
  )
}

export default Home