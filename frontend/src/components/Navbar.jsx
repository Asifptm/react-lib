import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, Book, Users, DollarSign, LogIn,
} from 'react-feather';
import '../css/Navbar.css';

const navItems = [
  { to: '/', label: 'Home', icon: <Home size={18} /> },
  { to: '/books', label: 'Books', icon: <Book size={18} /> },
  { to: '/members', label: 'Members', icon: <Users size={18} /> },
  { to: '/payments', label: 'Payments', icon: <DollarSign size={18} /> },
  { to: '/login', label: 'Login', icon: <LogIn size={18} /> },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={isActive ? 'active' : ''}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
