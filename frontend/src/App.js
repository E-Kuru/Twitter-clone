import React from 'react'
import { UserConnectProvider } from './contexts/usersConnect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
    <UserConnectProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </UserConnectProvider>
  )
}

export default App
