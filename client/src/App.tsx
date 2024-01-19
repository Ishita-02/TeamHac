import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import Signup from './Components/Signup';

function App() {
  return (
    <RecoilRoot>
            <Router>
                <Routes>
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </Router>
        </RecoilRoot>
  )
}

export default App;
