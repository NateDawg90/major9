import React from 'react';
import { Link } from "react-router";

const Navbar = (props) => {
  // debugger
  // TODO: turn Greeting into Navbar Components Left and Right
  if (props.currentUser !== null) {
    return (
      <nav className="navbar">
        <ul >
          <li><h3>Welcome, {props.currentUser.username}!</h3></li>
          <Link to="/" onClick={props.logout} className="navbar-link"><li>Logout</li></Link>
        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>
        <Link to="/login" className="navbar-link" ><li>Log In</li></Link>
        <Link to="/signup" className="navbar-link"><li>Sign Up</li></Link>
        <Link to="/" onClick={props.guestLogin} className="navbar-link"><li>Guest Login</li></Link>
      </ul>
    </nav>
  );
  }
};

export default Navbar;
