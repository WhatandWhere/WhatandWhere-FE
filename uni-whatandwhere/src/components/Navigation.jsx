import React from 'react';
import { Link } from 'react-router-dom';
import '../components/design-files-css/NavPage.css';
import HomeIcon from './Icons/HomeIcon';


const Navigation = () => {
  return (
    <nav className="nav-header">
      <div className="logo-container">
        <img className="nav-logo" src={'/AslanLogo.png'}></img>
        <span className="logo-text">Whatandwhere</span>
      </div>

      <div className="buttons">
        <ul className="nav-btns">
          <li>
            <Link to="/" className="nav-button">
              <HomeIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
