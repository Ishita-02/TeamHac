import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './components/Signup'
import { ThemeProvider } from "@/components/theme-provider"
import Login from './components/Login'
import About from './components/About'
import { CreateTeam } from './components/CreateTeam';
import JoinTeam from './components/JoinTeam';
import GetTeams from './components/GetTeams';
import Navbar from './components/Navbar';
import GetJoinTeams from './components/GetJoinTeam';
import { useState } from 'react';
// import Navbar from './components/Navbar';

const App: React.FC = () => {
  const baseURL = "https://team-hac-backend.vercel.app";
  return (
    
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path={`${baseURL}/signup`} element={<Signup />} />
            <Route path={`${baseURL}/createteam`} element={<CreateTeam />} />
            <Route path='/jointeam' element={<JoinTeam />} />
            <Route path='/viewteams' element={<GetTeams />} />
            <Route path='/invites' element={<GetJoinTeams />} />
          </Routes>
        </Router>
      </ThemeProvider>
  )
}

export default App;
