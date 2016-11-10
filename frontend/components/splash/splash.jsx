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

  parseUser(){
    let content = [];
     let  artistIdx = this.props.currentUser.id
     console.log(this.props.artists);
     if(this.props.artists){
    if(Object.keys(this.props.artists).length !== 0){
      let albumObject = this.props.artists[artistIdx].albums
      Object.keys(this.props.artists[artistIdx].albums).forEach( (albumId) => {
        let artistLink = `#/artist/${artistIdx}`
        content.push(<li className="frontpage-album">
            {albumObject[albumId].album_name}
            <Link to={`artist/${artistIdx}/album/${albumObject[albumId].id}`} key={albumObject[albumId].id}>
              <img className="frontpage-picture" src={albumObject[albumId].image_url} alt={albumObject[albumId].album_name}/>
            </Link>
        </li>
      )})
  } else {
    content.push(
      <li>
      <h1> You have no albums! </h1>
      <button>Add Album</button>
      </li>
    )
  }
}
  return(
    <div>
      <h2>Your Albums</h2>
      <ul>
        {content}
      </ul>
    </div>
  )

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

    let currentUserAlbums;
    console.log(this.props.currentUser);
      if(this.props.currentUser) {
        if(Object.keys(this.props.currentUser).length !== 0) {
          currentUserAlbums = this.parseUser.bind(this)()
        }
      }


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
            <br />
            <div className="content">
            {currentUserAlbums}
            </div>
          </div>
          <br/>
          <br/>
          <br/><br/><br/><br/>
        </div>
    )

  }



}

export default Splash
