import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons
import './NavBar.css';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { clearUserData } from '../../features/profile/profileSlice';
import { fetchSearchWord } from '../../api/search-word';
import { toast } from 'react-toastify';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [searchValue, setSearchValue] = useState('');
  // let searchValue = '';
  const userName = useAppSelector((state) => {
    // debugger;
    if (state.profile.userData) {
      return state.profile.userData.name;
    }
    else return 'Profile';
  });

  const handleSubmit = async () => {
    toast.warn(searchValue);
    if (searchValue) {
      const result = await fetchSearchWord(searchValue);
    }
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const handleLogout = () => {
    // debugger;
    dispatch(logout());
    dispatch(clearUserData());
    setTimeout(() => navigate('/login'), 1000); // Wait for 1 second before navigate('login');
  };

  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={handleToggle} aria-label={isMobile ? 'Close menu' : 'Open menu'}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className="nav-content">
        <ul className={isMobile ? 'nav-links-mobile show' : 'nav-links'}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input type="text" className="search-input"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          </div>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile" onClick={closeMobileMenu}>{userName}</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/registration" onClick={closeMobileMenu}>Registration</Link>
              </li>
              <li>
                <Link to="/login" onClick={closeMobileMenu}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
