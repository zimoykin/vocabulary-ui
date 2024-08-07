import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import FlashCards from './components/FlashCards';
import Profile from './components/Profile';
import Random from './components/Random';
import Competition from './components/competition/Competition';
import Dictionary from './components/Dictionary';
import Lesson from './components/Lesson';
import NavBar from './components/nav-bar/NavBar';
import './App.css';
import Registration from './components/register/Registration';
import Login from './components/login/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        {/* components */}
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flash-cards" element={<FlashCards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/random" element={<Random />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
