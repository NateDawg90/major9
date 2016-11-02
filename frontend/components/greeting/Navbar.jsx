import React from 'react';
import { Link } from "react-router";

const Navbar = (props) => {
  // debugger
  // TODO: turn Greeting into Navbar Components Left and Right
  if (props.currentUser !== null) {
    return (
      <nav className="navbar">
        <ul >
          <li><h2>Welcome, {props.currentUser.username}!</h2></li>
          <li><Link to="/" onClick={props.logout}>Logout</Link></li>
        </ul>
      </nav>
    );
  } else {
    return (<nav className="navbar">
      <ul>
        <Link to="/signup"><li>Sign Up</li></Link>
        <Link to="/login"><li>Log In</li></Link>
        <Link to="/" onClick={props.guestLogin}><li>Guest Login</li></Link>
      </ul>
    </nav>
  );
  }
};

export default Navbar;
