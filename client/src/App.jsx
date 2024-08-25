import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Chat from './components/chat'
import SideBar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex gap-20'>

    
    <SideBar/>
    <Chat/>
    </div>
    </>
  )
}

export default App
