import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import FlashCards from './components/flash-cards/FlashCards';
import Profile from './components/Profile';
import Random from './components/Random';
import Dictionary from './components/Dictionary';
import Lesson from './components/Lesson';
import NavBar from './components/nav-bar/NavBar';
import './App.css';
import Registration from './components/register/Registration';
import Login from './components/login/Login';
import Competition from './components/competition/Competition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
