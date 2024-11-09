import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section">
          <Image src="/HOMELOGO.svg" alt="Logo" width={72} height={16} />
          <div className="logo-text">
            <h2 className="logo-title">ChoosEquality</h2>
            <p className="logo-subtitle">Education For All</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Team">Team</Link></li>
          <li><Link href="/News">News</Link></li>
          <li><Link href="/Contact">Contact</Link></li>

          <div className="login-section">
            <Image src="/Login.svg" alt="Login Icon" width={32} height={16} />
            <button>Log in</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
