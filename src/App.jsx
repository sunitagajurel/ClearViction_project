import { useState } from 'react'
import UserList from './Components/UserList'
import './App.css'

function App() {
  return (
      <div className = "container">
        <div className = "header">
          <h2> UsersList</h2>
        </div> 
        <UserList/>  
      </div>
  )
}

export default App
