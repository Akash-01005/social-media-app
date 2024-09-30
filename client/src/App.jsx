import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Chat, Home } from "./components"


const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/chat" element={<Chat />}></Route>
        </Routes>
       </BrowserRouter>      
    </div>
  )
}

export default App