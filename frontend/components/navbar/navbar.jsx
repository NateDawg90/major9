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
          <li><Link to="/" onClick={props.logout}>Logout</Link></li>
        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/" onClick={props.guestLogin}>Guest Login</Link></li>
      </ul>
    </nav>
  );
  }
};

export default Navbar;
