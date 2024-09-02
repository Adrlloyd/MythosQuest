import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          MythosQuest
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/myths">
            Myths
          </a>
          <a className="navbar-item" href="/quizzes">
            Quizzes
          </a>
          <a className="navbar-item" href="/login">
            Login
          </a>
          <a className="navbar-item" href="/register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;