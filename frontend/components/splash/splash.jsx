import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {

  render() {


    return(
      <div>
      <h1> Welcome to Major9</h1>
      <h2> The Homepage of Japanese Jazz</h2>
      <h2> Here are our featured artists: </h2>
      <ul>
        <li><Link to="artist/1" key={1}>Guest</Link></li>
        <li><Link to="artist/2" key={2}>Andrew</Link></li>
        <li><Link to="artist/3" key={3}>Jimmy Weckl</Link></li>
        <li><Link to="artist/4" key={4}>Nekomata Master</Link></li>
      </ul>
      </div>
    )
  }
}

export default Splash
