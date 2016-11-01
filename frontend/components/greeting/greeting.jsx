import React from 'react';
import { Link } from "react-router";

const Greeting = (props) => {
  // debugger
  if (props.currentUser !== null) {
    return (
      <div className="login">
        <ul >
          <li><h2>Welcome, {props.currentUser.username}!</h2></li>
          <li><button onClick={props.logout}>Logout</button></li>
        </ul>
      </div>
    );
  } else {
    return (<div className="login">
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/" onClick={props.guestLogin}>Guest Login</Link></li>
      </ul>
    </div>
  );
  }
};

export default Greeting;
