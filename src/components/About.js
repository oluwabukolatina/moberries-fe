import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link className="app-link" to="/">
          Home
        </Link>
      </header>
    </div>
  );
};
export default About;
