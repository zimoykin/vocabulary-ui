import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons
import './NavBar.css';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { clearUserData } from '../../features/profile/profileSlice';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const userName = useAppSelector((state) => `${state.profile.userData?.name ?? 'user'} (profile)` ?? 'Profile');

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserData());
    navigate('/');
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
            <input type="text" className="search-input" placeholder="Search..." />
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
