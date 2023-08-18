// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="upper-nav">
      <button>
          <Link to="/" className="nav-button">Главная</Link>
      </button>
        <button>
          <Link to="/Calendar" className="nav-button">Календарь</Link>
        </button>
        <button>
          <Link to="/Profile" className="nav-button">Профиль</Link>
        </button>
        <button>
          <Link to="/Logout" className="nav-button">Выход</Link>
        </button>
    </nav>
  );
};

export default Navigation;
