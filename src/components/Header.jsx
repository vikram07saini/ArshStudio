import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white font-serif">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto rounded-xl hover:scale-110 transition duration-300" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link to="/home" className="hover:text-pink-700 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-pink-700 transition duration-200">About</Link>
          <Link to="#" className="hover:text-pink-700 transition duration-200">Photos</Link>
          <Link to="/plans" className="hover:text-pink-700 transition duration-200">Plans & Pricing</Link>
          <Link to="/booknow" className="hover:text-pink-700 transition duration-200">Book Now</Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 animate-bounce">
            <BsInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 animate-bounce">
            <FaSquareXTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 animate-bounce">
            <FaFacebook />
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
