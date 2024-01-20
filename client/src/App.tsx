import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import { ThemeProvider } from "@/components/theme-provider"
import Login from './components/Login'

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Signup/>
      <Login/>
    </ThemeProvider>
  )
}

export default App;
