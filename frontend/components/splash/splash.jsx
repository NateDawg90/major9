import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchArtists
  }

  parseArtists() {
    console.log(this.props.artists);
    return Object.keys(this.props.artists).map( (artist) => (
      <li><Link to={`artist/${artist}`} key={artist}>{this.props.artists[artist].artist_name}</Link></li>
    ))
  }

  render() {

    // <li><Link to="artist/1" key={1}>Guest</Link></li>
    // <li><Link to="artist/2" key={2}>Andrew</Link></li>
    // <li><Link to="artist/3" key={3}>Jimmy Weckl</Link></li>
    // <li><Link to="artist/4" key={4}>Nekomata Master</Link></li>
    let artists;
    if(this.props.artists) {
      if(Object.keys(this.props.artists).length !== 0) {
       artists = this.parseArtists.bind(this)()
      }
    }
    console.log(artists);
    return(
      <div>
      <h1> Welcome to Major9</h1>
      <h2> The Homepage of Japanese Jazz</h2>
      <h2> Here are our featured artists: </h2>
      <ul>
        {artists}
      </ul>
      </div>
    )
  }
}

export default Splash
