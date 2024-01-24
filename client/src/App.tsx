import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './components/Signup'
import { ThemeProvider } from "@/components/theme-provider"
import Login from './components/Login'
import About from './components/About'
import { CreateTeam } from './components/CreateTeam';
import JoinTeam from './components/JoinTeam';
import Navbar from './components/Navbar';

function App() {
  
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/createteam' element={<CreateTeam />} />
            <Route path='/jointeam' element={<JoinTeam />} />
          </Routes>
        </Router>
      </ThemeProvider>
  )
}

export default App;
