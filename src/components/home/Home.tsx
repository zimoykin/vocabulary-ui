import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const userName = useAppSelector((state) => {
    if (state.profile.userData) {
      return `Hi ${state.profile.userData.name}, welcome back! ⭐️`;
    }
    else return 'Hi, sign in or sign up! 🌞';
  });

  return (
    <div className='home'>
      <div className='welcome'>{userName}</div>
      <div className='button-container'>
        <div className='button-row'>
          <button className='button-large blue-bg' onClick={() => navigate('/flash-cards')}>Flash-Cards</button>
          <button className='button-small rosa-bg' onClick={() => navigate('/profile')}>Profile</button>
        </div>
        <div className='button-row'>
          <button className='button-small peach-bg' onClick={() => navigate('/random')}>Random</button>
          <button className='button-large green-bg' onClick={() => navigate('/competition')}>Competition</button>
        </div>
        <div className='button-row'>
          <button className='button-large lila-bg' onClick={() => navigate('/dictionary')}>Dictionary</button>
          <button className='button-small yellow-bg' onClick={() => navigate('/lesson')}>Lesson</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
