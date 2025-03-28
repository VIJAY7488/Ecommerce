import React from 'react'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/Layout'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
