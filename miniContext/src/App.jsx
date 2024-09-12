import { useState } from 'react'
import './App.css'
import UserContextProvoder from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvoder>
      <h1>react project</h1>
      <Login/>
      <Profile/>
    </UserContextProvoder>
    </>
  )
}

export default App
