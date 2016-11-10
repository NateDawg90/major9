import React from 'react';
import { Link, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import AlbumContainer from '../storefront/album/album_container';

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infoOpen: false
    }
  }

  componentWillMount() {
    this.props.fetchArtists
  }
// e => {hashHistory.replace(`artist/${artistIdx}`
  parseArtists() {
    console.log(this.props.artists);
    return Object.keys(this.props.artists).map( (artistIdx) => {
      let featuredAlbum = this.props.artists[artistIdx].albums[this.props.artists[artistIdx].albums.length-1]
      let artistLink = `#/artist/${artistIdx}`
      return(<li className="frontpage-album">
          {this.props.artists[artistIdx].artist_name}
          <Link to={`artist/${artistIdx}`} key={artistIdx}><img className="frontpage-picture" src={featuredAlbum.image_url} alt={this.props.artists[artistIdx].artist_name}/>
            </Link>
      </li>

    )})
  }

  // <img src={featuredAlbum.image_url}
  //   alt={<Link to={`artist/${artistIdx}`} key={artistIdx}>{this.props.artists[artistIdx].artist_name}</Link>}
  //   data-action={artistLink}/>


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
    //
    // <Coverflow
    //   width={960}
    //   height={480}
    //   displayQuantityOfSide={3}
    //   navigation={true}
    //   enableHeading={true}
    //   >
    //   {artists}
    // </Coverflow>

    return(
      <div>
        <div className="splash">
          <h1> Welcome to Major9</h1>
          <h2> The Homepage of Japanese Jazz</h2>
          <h2> Here are our featured artists: </h2>
          <br/>
          <div>
            <div className="content">
              <ul className="splash">
                {artists}
              </ul>

            </div>
          </div>
          <br/>
          <br/>
          </div>
          </div>
    )

  }



}

export default Splash
