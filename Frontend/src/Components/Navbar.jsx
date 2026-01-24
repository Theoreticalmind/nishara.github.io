import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ukFlag from "../assets/flags/uk.png";
import usFlag from "../assets/flags/us.png";
import inFlag from "../assets/flags/in.png";
import esFlag from "../assets/flags/esp.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState({ flag: ukFlag, name: "English (UK)" });

  const profileRef = useRef(null);
  const langRef = useRef(null);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold"
      : "text-gray-700 hover:text-pink-500 transition";

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white shadow-sm z-50 font-sans">
      <div className="w-screen px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Nishara
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <NavLink to="/destinations" className={navClass}>Destinations</NavLink>
              <NavLink to="/safety" className={navClass}>Safety</NavLink>
              <NavLink to="/community" className={navClass}>Community</NavLink>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">

              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="border px-3 py-1 rounded-full text-sm hover:bg-gray-100 flex items-center gap-2"
                >
                  <img src={language.flag} alt="flag" className="w-5 h-5 rounded-sm" />
                  {language.name}
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                    <button
                      onClick={() => changeLanguage({ flag: ukFlag, name: "English (UK)" })}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                    >
                      <img src={ukFlag} alt="UK" className="w-5 h-5 rounded-sm" />
                      English (UK)
                    </button>
                    <button
                      onClick={() => changeLanguage({ flag: usFlag, name: "English (US)" })}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                    >
                      <img src={usFlag} alt="US" className="w-5 h-5 rounded-sm" />
                      English (US)
                    </button>
                    <button
                      onClick={() => changeLanguage({ flag: inFlag, name: "Hindi (IN)" })}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                    >
                      <img src={inFlag} alt="India" className="w-5 h-5 rounded-sm" />
                      Hindi (IN)
                    </button>
                    <button
                      onClick={() => changeLanguage({ flag: esFlag, name: "Spanish (ESP)" })}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                    >
                      <img src={esFlag} alt="Spain" className="w-5 h-5 rounded-sm" />
                      Spanish (ESP)
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg"
                >
                  {/* Female emoji */}
                  <span className="text-xl">👩</span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </div>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-5">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/destinations" onClick={() => setMenuOpen(false)}>Destinations</NavLink>
            <NavLink to="/safety" onClick={() => setMenuOpen(false)}>Safety</NavLink>
            <NavLink to="/community" onClick={() => setMenuOpen(false)}>Community</NavLink>
            <NavLink to="/login" className="text-center py-2 border rounded-full">Login</NavLink>
            <NavLink to="/signup" className="text-center py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
