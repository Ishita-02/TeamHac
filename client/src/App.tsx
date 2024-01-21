import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './components/Signup'
import { ThemeProvider } from "@/components/theme-provider"
import Login from './components/Login'
import About from './components/About'

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
