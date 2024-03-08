import { useState } from 'react'
import UserList from './Components/UserList'
import Header from './Components/Header'
import './App.css'

function App() {
  return (
      <div className = "container">
        <Header/> 
        <UserList/>  
      </div>
  )
}

export default App
