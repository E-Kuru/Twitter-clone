import React from 'react'
import { UserConnectProvider } from './contexts/usersConnect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SingleTweet from './pages/SingleTweet/SingleTweet'
import NotFound from './pages/NotFound/NotFound'
const App = () => {
  return (
    <UserConnectProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/tweet/:id" element={<SingleTweet/>}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </UserConnectProvider>
  )
}

export default App
