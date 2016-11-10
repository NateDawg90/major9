import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchArtists
  }

  parseArtists() {
    console.log(this.props.artists);
    return Object.keys(this.props.artists).map( (artistIdx) => {
      let featuredAlbum = this.props.artists[artistIdx].albums[this.props.artists[artistIdx].albums.length-1]
      return(
          <img src={featuredAlbum.image_url} alt={this.props.artists[artistIdx].artist_name}/>
    )})
  }
  // <div key={`Box${featuredAlbum.album_name}`}>
// </div>
  // <h3 key={`name${featuredAlbum.album_name}`}> {featuredAlbum.album_name} </h3>
  // <Link to={`artist/${artistIdx}`} key={artistIdx}>{this.props.artists[artistIdx].artist_name}</Link>

  artistsExist(){

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


    // <div>
    //   <div className="splash">
    //     <h1> Welcome to Major9</h1>
    //     <h2> The Homepage of Japanese Jazz</h2>
    //     <h2> Here are our featured artists: </h2>
    //     <br/>
    //     <div>
    //       <div className="content">
    return(
          <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={1}
            navigation={true}
            enableHeading={true}
            >
            {artists}
          </Coverflow>
    )
//   </div>
// </div>
// <br/>
// <br/>
// </div>
// </div>

  }



}

export default Splash
