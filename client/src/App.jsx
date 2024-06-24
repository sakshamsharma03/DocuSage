import { useEffect, useState } from 'react'
import axios from "axios"
import Login from "./pages/login"
import Register from './pages/register'
import Chat from './pages/chat';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/header';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Router >
     
      <Routes>
         <Route path="/" element={<Chat/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
            </Routes>
      </Router>
    </>
  )
}

export default App
