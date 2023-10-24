import React from 'react';
import {Link} from 'react-router-dom';
import './design-files-css/NavPage.css';
import '/homeButton.png';

const HomeButton = () => {
    return (
        <nav className="nav-header">
            <div className="logo-container">
                <img className="nav-logo" alt="Logo"/> {/* Updated image source */}
                <span className="logo-text">Whatandwhere</span>
            </div>

            <div className="buttons">
                <ul className="nav-btns">
                    <li>
                        <Link to="/" className="nav-button">
                            Home
                        </Link>
                    </li>
                    {/* Additional links go here */}
                </ul>
            </div>
        </nav>
    );
};

export default HomeButton;
