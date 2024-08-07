import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useAppSelector } from '../../hooks';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const userName = useAppSelector((state) => `Hi ${state.profile.userData?.name}, nice to meet you` ?? 'please login/register your accaunt');
  return (
    <div className='home'>
      <div className='welcome'>{userName}</div>
      <div className='button-row'>
        <button className='button-large' onClick={() => navigate('/flash-cards')}>Flash-Cards</button>
        <button className='button-small' onClick={() => navigate('/profile')}>Profile</button>
      </div>
      <div className='button-row'>
        <button className='button-small' onClick={() => navigate('/random')}>Random</button>
        <button className='button-large' onClick={() => navigate('/competition')}>Competition</button>
      </div>
      <div className='button-row'>
        <button className='button-large' onClick={() => navigate('/dictionary')}>Dictionary</button>
        <button className='button-small' onClick={() => navigate('/lesson')}>Lesson</button>
      </div>
    </div>
  );
};

export default Home;
