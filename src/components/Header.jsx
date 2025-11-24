import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white font-serif">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-60">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto rounded-xl hover:scale-110 transition duration-300" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link to="/home" className="hover:text-pink-700 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-pink-700 transition duration-200">About</Link>
          <Link to="#" className="hover:text-pink-700 transition duration-200">Photos</Link>
          <Link to="/plans" className="hover:text-pink-700 transition duration-200">Plans & Pricing</Link>
          <Link to="/booknow" className="hover:text-pink-700 transition duration-200">Book Now</Link>
        </nav>

        {/* Desktop Social Icons */}
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl z-60 p-2 hover:text-pink-700 transition duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-black bg-opacity-95 z-50 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          md:hidden
        `}>
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <Link 
              to="/home" 
              className="hover:text-pink-700 transition duration-200 py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-pink-700 transition duration-200 py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="#" 
              className="hover:text-pink-700 transition duration-200 py-2"
              onClick={closeMenu}
            >
              Photos
            </Link>
            <Link 
              to="/plans" 
              className="hover:text-pink-700 transition duration-200 py-2"
              onClick={closeMenu}
            >
              Plans & Pricing
            </Link>
            <Link 
              to="/booknow" 
              className="hover:text-pink-700 transition duration-200 py-2"
              onClick={closeMenu}
            >
              Book Now
            </Link>
            
            {/* Mobile Social Icons */}
            <div className="flex space-x-6 text-3xl mt-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-700 transition duration-200"
                onClick={closeMenu}
              >
                <BsInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-700 transition duration-200"
                onClick={closeMenu}
              >
                <FaSquareXTwitter />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-700 transition duration-200"
                onClick={closeMenu}
              >
                <FaFacebook />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;