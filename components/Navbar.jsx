"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          CreativeAgency
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <a href="#hero" className="hover:text-indigo-600">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-indigo-600">Services</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-6 space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}

    </nav>
  );
}