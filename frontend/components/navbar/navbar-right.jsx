import React from 'react';
import { Link } from "react-router";

const NavbarRight = (props) => {
  console.log(props);
  // debugger
  // TODO: turn Greeting into Navbar Components Left and Right
  if (props.currentUser !== null) {
    return (
        <ul>
          <li><h2>Welcome, {props.currentUser.username}!</h2></li>
          <li><Link to="/" onClick={props.logout}>Logout</Link></li>
        </ul>
    );
  } else {
    return (
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/" onClick={props.guestLogin}>Guest Login</Link></li>
      </ul>
  );
  }
}

export default NavbarRight
