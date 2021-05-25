import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link className="header-link" to="/">
        MoBerries
      </Link>
    </div>
  );
};
export default Header;
